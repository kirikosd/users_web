import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class UserEdit extends Component {

    emptyItem = {
        name: '',
        surname: '',
        gender: '',
        birthdate: '',
        workAddress: '',
        homeAddress: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'register-user') {
            const user = await (await fetch(`/users/${this.props.match.params.id}`)).json();
            this.setState({item: user});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/display-users' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/display-users');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit User' : 'Register User'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname">Surname</Label>
                        <Input type="text" name="surname" id="surname" value={item.surname || ''}
                               onChange={this.handleChange} autoComplete="surname"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="text" name="gender" id="gender" value={item.gender || ''}
                               onChange={this.handleChange} autoComplete="gender"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birthdate">Date of Birth</Label>
                        <Input type="text" name="birthdate" id="birthdate" value={item.birthdate || ''}
                               onChange={this.handleChange} autoComplete="birthdate"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="workAddress">Work Address</Label>
                        <Input type="text" name="workAddress" id="workAddress" value={item.workAddress || ''}
                               onChange={this.handleChange} autoComplete="workAddress"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="homeAddress">Surname</Label>
                        <Input type="text" name="homeAddress" id="homeAddress" value={item.homeAddress || ''}
                               onChange={this.handleChange} autoComplete="homeAddress"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/users">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default UserEdit;