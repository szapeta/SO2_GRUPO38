import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/Types";
import { NavAdmin } from "./NavAdmin";
import { NavSimple } from "./NavSimple";

export const NavAuth = () => {
    const {
        userLogged: { name, user, rol, iduser, home },
        dispatch,
    } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        history.replace("/home");
        dispatch({
            type: types.logout,
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to={home}>
                Manejo de Memoria
            </Link>

            {rol ===types.rolAdmin ? <NavAdmin /> : null}
            {rol ===types.rolSimple ? <NavSimple /> : null}

            <ul className="navbar-nav ml-auto">
                <button className="nav-item nav-link btn" disabled>
                    ({iduser}) {user}
                </button>
                <button className="nav-item nav-link btn" disabled>
                    |
                </button>
                <button
                    className="nav-item nav-link btn"
                    onClick={handleLogout}
                >
                    Salir
                </button>
            </ul>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        
        </nav>
    );
};
