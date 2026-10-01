import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Alert, Button, Container, Row, Col, Input, Spinner } from 'reactstrap';
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
            <p>Loading...</p>
            </div>
        );
    }

    const usersList = users.map(user => {
        return (
            <div>
                <ul>
                    <li key={user.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid #eee', borderRadius: '4px', marginBottom: '4px', width: '450px' }}>
                        <span>{user.name} {user.surname}</span>
                        <span onClick={() => setSelectedId(user.id)}> ⌞ ⌝ </span>
                    </li>
                </ul>
            </div>
        );
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <Row>
                    <Col md="4" className="border-end" style={{maxHeight: '70vh', overflowY: 'auto'}}>
                        <h3>Users</h3>
                        {usersList}
                    </Col>
                    <Col md="8">
                        <h3>User Details</h3>
                        {selectedUser ? (
                            <div>
                                <div><span>Name: </span><span>{selectedUser.name}</span></div>
                                <div><span>Surname: </span><span>{selectedUser.surname}</span></div>
                                <div><span>Gender: </span><span>{selectedUser.gender}</span></div>
                                <div><span>Birthdate: </span><span>{selectedUser.birthdate}</span></div>
                                <div><span>Work address: </span><span>{selectedUser.workAddress}</span></div>
                                <div><span>Home address: </span><span>{selectedUser.homeAddress}</span></div>
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