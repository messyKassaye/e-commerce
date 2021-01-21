import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import React from 'react'
import { Dashboard } from "@material-ui/icons";
function AuthRoute(){
    return <Router>
        <Switch>
            <Route path='/' component={Dashboard}/>
        </Switch>
</Router>
}

export default AuthRoute