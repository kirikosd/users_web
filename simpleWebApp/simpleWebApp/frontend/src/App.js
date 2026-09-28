import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserEdit from "./UserEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/users' exact={true} component={Home}/>
            <Route path='/users/display' exact={true} component={UserList}/>
            <Route path='/users/update/:id' component={UserEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;