import * as React from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import CustomDatePicker from "./customdatepicker";
import {useState} from "react";



export const reserveForm = () => {

    const [datepick, setDatePick] = useState(new Date());
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

        const handleNameChange= (event) => {
            setName(event.target.value);
        };

        const handleSurnameChange= (event) => {
            setSurname(event.target.value);
        };

        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        };

        const handleNumberChange = (event) => {
            setNumber(event.target.value);
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(` 
            name: ${name} \n
            surname: ${surname} \n
            email: ${email} \n 
            number: ${number} \n 
            You can replace this alert with your process`);
    };

            return (
                <div className={"reserveFormContent"} onSubmit={handleSubmit}>
                    <Form className={"reserveFormstyle"}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control aria-label="First name" type="text" placeholder={"Nombre"} value={name} onChange={handleNameChange}/>
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control aria-label="Last name" type="text" placeholder={"Apellidos"} value={surname} onChange={handleSurnameChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Fecha de salida : </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <CustomDatePicker
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                selected={datepick}
                                onChange={(date) => setDatePick(date)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail" >
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email"  pattern=".+@globex\.com" size="30" required  placeholder="ejemplo@econotravel.org" value={email}
                                          onChange={handleEmailChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Número de Teléfono</Form.Label>
                            <Form.Control type="number" class="no-arrow" placeholder="Número de teléfono" value={number} onChange={handleNumberChange}/>
                        </Form.Group>
                        <div>
                            <Button className="btn btn-success" disabled={!name || !surname || !email || !number}>
                                <Link to={"/thanks"}  className={"reservebuttontext"}> Reservar </Link>
                            </Button>
                        </div>
                    </Form>
                </div>

            )
        }