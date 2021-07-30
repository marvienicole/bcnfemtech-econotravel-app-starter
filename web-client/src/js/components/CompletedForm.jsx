import * as React from "react";
import {Link} from "react-router-dom";

export const completedForm = () => <div className={"completedFormMsg"}>

    <h1>¡ Gracias por elegir Econotravel !</h1>
    <a><Link to={"/"}> Volver a la pagina de <span className={"homeswitch"}>Inicio</span> </Link></a>

</div>