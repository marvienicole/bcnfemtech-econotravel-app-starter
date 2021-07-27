import * as React from "react";
import { Link } from 'react-scroll';





export const NavigationBar = () => (
            <nav className={"navigationBar"}>
                    <div className={"LogoImg"}>
                        <a><Link to={"/home"}> <img src="/transparentLogo.png" alt={""} /> </Link></a>
                    </div>
                <div className={"switchLinks"}>
                    <a><Link to="/" smooth={true} duration={1200}> <span className={"homeswitch"}>Home</span> </Link></a>
                    <a><Link to="scroll2expiriences" smooth={true}  offset={-70} duration={500}> Experiencias </Link></a>
                    <a><Link to="footer" smooth={true} duration={800}> Location </Link></a>
                </div>
            </nav>
)