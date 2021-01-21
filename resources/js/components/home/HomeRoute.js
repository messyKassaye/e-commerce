import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Dashboard from '../auth/Dashboard';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/Signup';

function HomeRoute(){
    return <Router>
    <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/signup' component={SignUp} />
        <Route path={"/auth"} component={Dashboard}/>
    </Switch>
</Router>
}

export default HomeRoute