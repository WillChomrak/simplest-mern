import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component.js';
import userList from './components/user-list.component';
import createUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path='/' exact component={userList} />
        <Route path='/create' component={createUser} />
      </div>
    </Router>
    
  );
}

export default App;
