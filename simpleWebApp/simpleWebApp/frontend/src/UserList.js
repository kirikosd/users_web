import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Spinner } from 'reactstrap';
import AppNavbar from './AppNavbar';
import './App.css';

function UserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        async function loadUsers(){
            try{
                const response = await fetch('/display-users');
                if(!response.ok) throw new Error(`Server responded with ${response.status}`);
                setUsers(await response.json());
                setIsLoading(false);
            } catch {
                alert('Could not load users.');
            }
        }
        loadUsers();
    }, []);

    async function remove(id) {
        const confirmed = window.confirm(`Delete ${selectedUser.name} ${selectedUser.surname}? This cannot be undone.`);
        if (!confirmed) return;

        try{
            const response = await fetch(`/delete-user/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error(`Delete failed (${response.status})`);
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        } catch {
            alert('Could not delete user.');
        }
    }

    const selectedUser = users.find(u => u.id === selectedId) ?? null;

    if (isLoading) {
        return (
            <div>
            <AppNavbar/>
            <Container className="text-center py-5">
                <Spinner color="primary" />
                <p className="mt-2 text-muted">Loading users…</p>
            </Container>
            </div>
        );
    }

    const usersList = users.map(user => {
        return (
            <ul>
                <li key={user.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid #eee', borderRadius: '4px', marginBottom: '4px', width: '450px' }}>
                    <button type="button"
                    className={`user-row w-100 text-start btn btn-link text-decoration-none px-3 py-2 border rounded mb-1 ${user.id === selectedId ? 'active fw-bold' : ''}`}
                        onClick={() => setSelectedId(user.id)}>
                        {user.name} {user.surname}
                    </button>
                </li>
            </ul>
        );
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid className="py-3">
                <Row>
                    <Col md="4" className="border-end" style={{maxHeight: '70vh', overflowY: 'auto'}}>
                        <h3>Users</h3>
                        {usersList}
                    </Col>
                    <Col md="8">
                        <h3>User Details</h3>
                        {selectedUser ? (
                            <div>
                                <div>Name: {selectedUser.name}</div>
                                <div>Surname: {selectedUser.surname}</div>
                                <div>Gender: {selectedUser.gender}</div>
                                <div>Birthdate: {selectedUser.birthdate}</div>
                                <div>Work address: {selectedUser.workAddress}</div>
                                <div>Home address: {selectedUser.homeAddress}</div>
                                <Button size="sm" color="primary" tag={Link}
                                        to={`/update-user/${selectedUser.id}`}>Edit</Button>
                                <Button size="sm" color="danger"
                                        onClick={() => remove(selectedUser.id)}>Delete</Button>
                            </div>
                            ) : (
                            <p>Select a user to see details</p>
                        )}
                    </Col>
                </Row>
                <Button color="success" tag={Link} to="/register-user" className="mt-3">Add User</Button>
            </Container>
        </div>
    );
}
export default UserList;