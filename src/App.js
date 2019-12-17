import React from 'react';
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import JobsPage from "./Jobs/JobsPage";
import LoginPage from "./forms/LoginPage";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    return (
        <Router>
            <AppHeader/>
            <Switch>
                <Route exact path="/" component={JobsPage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
            <AppFooter/>
        </Router>
    );
}

export default App;
