import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

function AppNavbar() {
    return(
        <Navbar
          color="dark"
          dark
          expand="md"
          className="p-3 shadow-sm"
          style={{
            background: 'linear-gradient(90deg, #212529 0%, #343a40 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div className="container-fluid">
            <NavbarBrand
              tag={Link}
              to="/"
              className="fw-bold me-4"
              style={{ fontSize: '1.25rem', letterSpacing: '-0.5px' }}
            >
              Home
            </NavbarBrand>
            <NavbarBrand
              tag={Link}
              to="/display-users"
              className="text-light opacity-75 hover-opacity-100 px-3 py-2 rounded"
              style={{
                transition: 'all 0.2s ease-in-out',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0.75';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Users
            </NavbarBrand>
            <NavbarBrand
              tag={Link}
              to="/register-user"
              className="text-light opacity-75 hover-opacity-100 px-3 py-2 rounded"
              style={{
                transition: 'all 0.2s ease-in-out',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0.75';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Register
            </NavbarBrand>
          </div>
        </Navbar>
    );
}
export default AppNavbar;