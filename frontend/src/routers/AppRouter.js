import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { DashboardPrivado } from "./DashboardPrivado";
import { DashboardPublic } from "./DashboardPublic";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const { userLogged } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <PublicRoute
                    exact
                    path="/home"
                    component={DashboardPublic}
                    isAuthenticated={userLogged.logged}
                />

                <PrivateRoute
                    path="/"
                    component={DashboardPrivado}
                    isAuthenticated={userLogged.logged}
                />
            </Switch>
        </Router>
    );
};
