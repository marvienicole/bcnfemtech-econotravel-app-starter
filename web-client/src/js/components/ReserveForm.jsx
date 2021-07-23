import * as React from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


export const reserveForm = () => (
    <div className={"reserveFormContent"} >
        <Form className={"reserveFormstyle"}>
            <Form.Group className="mb-3">
                <Form.Label>First and last name</Form.Label>
                <Form.Control aria-label="First name" />
                <Form.Control aria-label="Last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Number" />
            </Form.Group>
            <div>
                <Link to={"/thanks"}> <Button className="btn btn-success"> Reserve now! </Button> </Link>
            </div>
        </Form>
    </div>


)
