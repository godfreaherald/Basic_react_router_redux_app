import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import { history } from './helpers';

function App() {
  return (
    <div className="container">
      <Router history={history}>
        <NavigationBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
