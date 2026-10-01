import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const actions = [
  {
    to: '/display-users',
    icon: '👥',
    title: 'Display Users',
    text: 'Browse and view detailed information about registered users.',
  },
  {
    to: '/register-user',
    icon: '➕',
    title: 'Register New User',
    text: 'Add a new user to the system using the registration form.',
  },
];

function Home() {
    return (
        <div>
            <AppNavbar/>
            <div className="container">
                <div className="homepage-hero">
                    <h1>Welcome to User Manager</h1>
                    <p>Register new users or browse the existing user database.</p>
                    <div className="action-cards">
                        {actions.map(({ to, icon, title, text }) => (
                            <Link key={to} to={to}>
                                <div className="action-card">
                                    <div className="card-icon">{icon}</div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;