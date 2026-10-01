import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import './App.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/display-users', label: 'Users' },
  { to: '/register-user', label: 'Register' },
];

function AppNavbar() {
  return (
    <Navbar expand="md" className="app-navbar p-3 shadow-sm">
      <div className="container-fluid">
        <Nav navbar>
          {links.map(({ to, label }) => (
            <NavItem key={to}>
              <NavLink tag={RRNavLink} to={to} className="app-nav-link">
                {label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    </Navbar>
  );
}
export default AppNavbar;