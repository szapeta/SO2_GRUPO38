import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FooterAuth from "../components/rol/FooterAuth";
import { NavAuth } from "../components/rol/NavAuth";

export const DashboardPrivado = () => {
  return (
    <>
      <NavAuth />
      <div className="container mt-2">
        <Switch>
        
          <Redirect to="/homeadmin" />
        </Switch>
      </div>
      <FooterAuth />
    </>
  );
};
