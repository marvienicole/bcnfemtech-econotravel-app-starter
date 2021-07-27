import * as React from "react";
import {Button, Carousel, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";

export const ExpirienceCard = (props) =>

    <div className="expiriences1" id={"scroll2expiriences"}>
        <Card>
                <Carousel> <Card.Img src="/backgroundForm.jpg" alt="Card image"/> </Carousel>
                <Card.Body>
                        <Card.Title> {props.expirience.title} </Card.Title>
                        <Card.Text> {props.expirience.description} </Card.Text>
                <ListGroup className="list-group-flush">
                        <ListGroupItem>Duración de la excursión: {props.expirience.duration + "h"}</ListGroupItem>
                        <ListGroupItem>{props.expirience.accesibility}</ListGroupItem>
                        <ListGroupItem>Precio por persona: {props.expirience.pricePerPerson + "€"}</ListGroupItem>
                        <ListGroupItem>{props.expirience.etiquete}</ListGroupItem>
                </ListGroup>
                        <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
                </Card.Body>
        </Card>
    </div>
