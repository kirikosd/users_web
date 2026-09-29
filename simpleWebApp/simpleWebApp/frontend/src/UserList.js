import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

function UserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('/display-users')
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data);
                setUsers(data);
                setIsLoading(false);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    async function remove(id) {
        await fetch(`/delete-user/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        });
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const userDetails = ({user, remove}) => {
        <div>
            <div><span>Name:</span><span>{user.name}</span></div>
            <div><span>Surname:</span><span>{user.surname}</span></div>
            <div><span>Gender:</span><span>{user.gender}</span></div>
            <div><span>Birthdate:</span><span>{user.birthdate}</span></div>
            <div><span>Work address:</span><span>{user.workAddress}</span></div>
            <div><span>Home address:</span><span>{user.homeAddress}</span></div>
            <Button size="sm" color="primary" tag={Link} to={`/update-user/${user.id}`}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => remove(user.id)}>Delete</Button>
        </div>
    };

    const usersList = users.map(user => {
        return (
            <div>
                <ul>
                    <li key={user.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid #eee', borderRadius: '4px', marginBottom: '4px', width: '520px' }}>
                        <span>{user.name} {user.surname}</span>
                        <span onClick={() => setSelectedUser(user)}> ➕ </span>
                    </li>
                </ul>
            </div>
        );
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div style={{height: '80vh', width: '40%', float: 'left', overflowY:'auto'}}>
                    <h3>Users</h3>
                    {usersList}
                </div>
                <div style={{ float: 'left', width: '60%' }}>
                    <h3>User Details</h3>
                    {selectedUser ? (
                        <div>
                            <div><span>Name:</span><span>{selectedUser.name}</span></div>
                            <div><span>Surname:</span><span>{selectedUser.surname}</span></div>
                            <div><span>Gender:</span><span>{selectedUser.gender}</span></div>
                            <div><span>Birthdate:</span><span>{selectedUser.birthdate}</span></div>
                            <div><span>Work address:</span><span>{selectedUser.workAddress}</span></div>
                            <div><span>Home address:</span><span>{selectedUser.homeAddress}</span></div>
                            <Button size="sm" color="primary" tag={Link}
                                    to={`/update-user/${selectedUser.id}`}>Edit</Button>
                            <Button size="sm" color="danger"
                                    onClick={() => remove(selectedUser.id)}>Delete</Button>
                        </div>
                        ) : (
                        <p>Select a user to see details</p>
                    )}
                </div>
                <div style={{ clear: 'both' }}>
                    <Button color="success" tag={Link} to="/register-user">Add User</Button>
                </div>
            </Container>
        </div>
    );
}
export default UserList;