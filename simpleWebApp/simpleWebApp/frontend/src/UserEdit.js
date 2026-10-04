import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';

function UserEdit() {
    const {id} = useParams();
    const nav = useNavigate();

    const emptyItem = {
        name: '',
        surname: '',
        gender: '',
        birthdate: '',
        workAddress: '',
        homeAddress: ''
    }

    const [item, setItem] = useState(emptyItem);
    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            const fetchUser = async () => {
                const response = await fetch(`/user/${id}`);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                setItem(await response.json());

            };
            fetchUser();
        }
    }, [id, isEdit]);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = isEdit ? `/update-user/${item.id}` : '/register-user';
        const method = isEdit ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${await response.text()}`);
            } else {
                alert("Saved Successfully")
            }

            nav('/display-users');
        } catch(error) {
            console.error('Save failed:', error);
            alert('Failed to save user');
        }
    };

    const title = <h2>{item.id ? 'Edit User' : 'Register User'}</h2>;

    return (
        <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name*</Label>
                        <Input type="text" name="name" maxlength="255" id="name" value={item.name || ''}
                               onChange={handleChange} autoComplete="name" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname" maxlength="255">Surname*</Label>
                        <Input type="text" name="surname" id="surname" value={item.surname || ''}
                               onChange={handleChange} autoComplete="surname" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">Gender*</Label>
                        <br></br>
                        <Input type="select"
                          name="gender"
                          id="gender"
                          value={item.gender || ''}
                          onChange={handleChange}
                          autoComplete="sex"
                          required
                        >
                          <option value="" disabled>Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birthdate">Date of Birth*</Label>
                        <br></br>
                        <DatePicker
                          id="birthdate"
                          name="birthdate"
                          selected={item.birthdate ? parseISO(item.birthdate) : null}
                          onChange={(date) =>
                            handleChange({
                              target: { name: 'birthdate', value: date ? format(date, 'yyyy-MM-dd') : '' }
                            })
                          }
                          dateFormat="dd/MM/yyyy"
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={100}
                          maxDate={new Date()}
                          placeholderText="DD/MM/YYYY"
                          required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="workAddress">Work Address (optional)</Label>
                        <Input type="textarea" maxlength="255" name="workAddress" id="workAddress" value={item.workAddress || ''}
                               onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="homeAddress">Home Address(optional)</Label>
                        <Input type="textarea"  maxlength="255" name="homeAddress" id="homeAddress" value={item.homeAddress || ''}
                               onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}
export default UserEdit;