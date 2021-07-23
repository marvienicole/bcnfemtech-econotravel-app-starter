import * as React from "react";
import {Link} from "react-router-dom";


export const NavigationBar = () => (
            <nav className={"navigationBar"}>
                <div className={"LogoImg"}>
                    <a><Link to={"/home"}> <img src="/transparentLogo.png" alt={""} /> </Link></a>
                </div>
                <div className={"switchLinks"}>
                    <a><Link to={"/"}> <span className={"homeswitch"}>Home</span> </Link></a>
                    <a><Link to={"/"}> Catálogo </Link></a>
                    <a><Link to={"/experiencias"}> Experiencias </Link></a>
                    <a><Link to={"/about"}> QUIÉNES SOMOS </Link></a>
                </div>
            </nav>
)