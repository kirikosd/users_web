import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UserList from './UserList';
import UserEdit from "./UserEdit";

function App() {
    return (
        <Router>
          <Routes>
            <Route path="*" element={<Home/>}/>
            <Route path='/display-users' element={<UserList/>}/>
            <Route path='/update-user/:id' element={<UserEdit/>}/>
            <Route path='/register-user' element={<UserEdit/>}/>
          </Routes>
        </Router>
    );
}
export default App;