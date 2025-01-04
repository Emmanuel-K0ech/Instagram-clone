import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import './styles/styles.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
};

export default App;