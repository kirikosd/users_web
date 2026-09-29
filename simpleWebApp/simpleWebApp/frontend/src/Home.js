import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <AppNavbar/>
            <div className="container">
                <div id="view-home" class="page-view active">
                    <div className="homepage-hero">
                        <h1>Welcome to User Manager</h1>
                        <p>Register new users or browse the existing user database.</p>
                        <div className="action-cards">
                            <Link to="/display-users">
                            <div className="action-card">
                                <div className="card-icon">👥</div>
                                <h3> Display users </h3>
                                <p>Browse, search, and view detailed information about registered users.</p>
                            </div>
                            </Link>
                            <Link to="/register-user">
                            <div className="action-card">
                                <div className="card-icon">➕</div>
                                <h3>Register new user</h3>
                                <p>Fill in the form below to add a new user to the system.</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;