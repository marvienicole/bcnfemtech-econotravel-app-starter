import * as React from "react";
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom";


export const Catalog = (props) => (
        <div>
            <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
        </div>
)