import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

function AppNavbar() {
    return(
        <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand tag={Link} to="/display-users">Users</NavbarBrand>
            <NavbarBrand tag={Link} to="/register-user">Register</NavbarBrand>
        </Navbar>
    );
}
export default AppNavbar;