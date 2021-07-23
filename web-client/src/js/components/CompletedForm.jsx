import * as React from "react";
import {Link} from "react-router-dom";

export const completedForm = () => <div className={"completedFormMsg"}>

    <h1>Thanks for reserving!</h1>
    <a><Link to={"/inicio"}> Go back to <span className={"homeswitch"}>Homepage</span> </Link></a>

</div>