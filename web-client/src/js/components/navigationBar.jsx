import * as React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '/web-client/src/public/img/Logo-transparentt.png';

export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <div className={"logoIMG"}>
            <Logo />
        </div>
        <div className={"switchLinks"}>
            <a><Link to={"/catalog"}> Inicio </Link></a>
            <a><Link to={"/experiencias"}> Experiencias </Link></a>
            <a><Link to={"/about"}> QUIÉNES SOMOS </Link></a>
        </div>
    </nav>
)
