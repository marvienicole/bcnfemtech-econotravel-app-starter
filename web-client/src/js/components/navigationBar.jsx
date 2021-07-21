import * as React from "react";
import {Link} from "react-router-dom";


export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <div className={"LogoImg"}>
            <img src="/web-client/src/img/transparentLogo.png" alt={"Logo"} />
        </div>
        <div className={"switchLinks"}>
            <a><Link to={"/catalog"}> Inicio </Link></a>
            <a><Link to={"/experiencias"}> Experiencias </Link></a>
            <a><Link to={"/about"}> QUIÉNES SOMOS </Link></a>
        </div>
    </nav>
)

/*        <div className={"logoIMG"}>
           <img src={LogoTransparent} alt="Logo" />
        </div>*/
