import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import AuthenticatedRoute from "./AuthenticationRoute";
import Dashboard from "../components/auth/Dashboard";
import HomePage from "../components/home/components/HomePage";
import AuthRoute from "../components/auth/AuthRoute";
class Routes extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <Switch>
                    <AuthenticatedRoute path={'/auth'} component={AuthRoute}/>
                    <PrivateRoutes path='/' component={HomePage}/>
                </Switch>
            </Router>
        );
    }


}

export default Routes
