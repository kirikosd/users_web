import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

function AppNavbar() {
    return(
        <Navbar className="navbar-custom">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand className="nav-link-custom" tag={Link} to="/display-users">Users</NavbarBrand>
            <NavbarBrand className="nav-link-custom" tag={Link} to="/register-user">Register</NavbarBrand>
        </Navbar>
    );
}
export default AppNavbar;