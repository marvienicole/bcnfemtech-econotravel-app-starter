import * as React from "react";
import {Button, Carousel, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";

export const ExpirienceCard = (props) =>

    <div className="expiriences1" id={"scroll2expiriences"}>
        <Card>
            <Carousel>
                <Carousel.Item>
                    <Card.Img src={props.expirience.photo1}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Img src={props.expirience.photo2}/>
                </Carousel.Item>
            </Carousel>
            <Card.Body>
                <Card.Title> {props.expirience.title} </Card.Title>
                <Card.Text> {props.expirience.description} </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className={"tarjeta-displayflex"}>
                        <p className={"arraylisttitulos"}> Duración: </p>
                        <p className={"arraylist-displayflex"}>{props.expirience.duration + " horas"} </p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <p className={"arraylisttitulos"}> Accesibilidad: </p> {props.expirience.accesibility}
                    </ListGroupItem>
                    <ListGroupItem className={"tarjeta-displayflex"}>
                        <p className={"arraylisttitulos"}> Precio por persona: </p>
                        <p className={"arraylist-displayflex"}>  {props.expirience.pricePerPerson + "€"}</p>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ul>
                            <li>{props.expirience.etiquete1}</li>
                            <li>{props.expirience.etiquete2}</li>
                            <li>{props.expirience.etiquete3}</li>
                        </ul>
                    </ListGroupItem>
                </ListGroup>
                <div className={"btncardreserva"}>
                <Link to={"/reserve"}> <Button className="btn btn-warning"> Reservar </Button> </Link>
                </div>
            </Card.Body>
        </Card>
    </div>
