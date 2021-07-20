import * as React from "react";
import {Link} from "react-router-dom";

export const NavigationBar = () => {
   return <nav>
               <ul>
                   <li>
                       <Link to={"/catalog"}> Inicio </Link>
                   </li>
                   <li>
                       <Link to={"/experiencias"}> Experiencias </Link>
                   </li>
                   <li>
                       <Link to={"/quienessomos"}> QUIÉNES SOMOS </Link>
                   </li>
               </ul>
            </nav>
}
