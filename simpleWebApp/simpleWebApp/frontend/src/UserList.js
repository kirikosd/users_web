import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

function UserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    const usersList = users.map(user => {
        return (
            <tr key={user.id}>
                <td style={{whiteSpace: 'nowrap'}}>{user.name}</td>
                <td style={{whiteSpace: 'nowrap'}}>{user.surname}</td>
                <td>{user.gender}</td>
                <td>{user.birthdate}</td>
                <td>{user.workAddress}</td>
                <td>{user.homeAddress}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={`/update-user/${user.id}`}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => remove(user.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <h3>Users</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="15%">Name</th>
                        <th width="15%">Surname</th>
                        <th width="15%">Gender</th>
                        <th width="15%">Birthdate</th>
                        <th width="15%">Work Address</th>
                        <th width="15%">Home Address</th>
                        <th width="10%">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {usersList}
                    </tbody>
                </Table>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/register-user">Add User</Button>
                </div>
            </Container>
        </div>
    );
}
export default UserList;