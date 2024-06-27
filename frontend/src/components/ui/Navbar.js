import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
      Manejo de Memoria
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav"></div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
        
          <div>
            <p className="nav-item nav-link btn" disabled> </p>
            </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
