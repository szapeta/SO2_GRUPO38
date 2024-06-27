import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export const NavSimple = () => {
  return (
    <>
            <div className="navbar-nav">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link pr-5"
                    exact
                    to="/perfil"
                >
                    Perfil
                </NavLink>
            </div>
            <div className="navbar-nav">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link pr-5"
                    exact
                    to="/baja"
                >
                    Darse de baja
                </NavLink>
            </div>
            <div className="navbar-nav pr-5">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/friends"
                >
                    Buscar Usuarios
                </NavLink>
            </div>

            <div className="navbar-nav pr-5">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/actividades"
                >
                    Actividades Ecologicas
                </NavLink>
            </div>
            <div className="navbar-nav pr-5">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/herramienta"
                >
                    Herramientas de Aire
                </NavLink>
            </div>
            <div className="navbar-nav pr-5">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/reporte"
                >
                    Reporte
                </NavLink>
            </div>
        </>
  )
}
