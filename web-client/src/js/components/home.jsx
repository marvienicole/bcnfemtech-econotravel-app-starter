import * as React from "react";
import {Button} from "react-bootstrap";

export const Home= (props) => (
    <div>
        <Button className="btn btn-primary">B-primary</Button>
        <Button className="btn btn-danger">B-danger</Button>
        <Button className="btn btn-success">B-success</Button>
        <Button className="btn btn-warning">B-warning</Button>
    </div>
);