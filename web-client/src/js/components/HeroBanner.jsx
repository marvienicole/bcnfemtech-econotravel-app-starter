import * as React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {Button, CarouselItem, OverlayTrigger, Popover} from "react-bootstrap";
import {Link} from "react-router-dom";

export const HeroBanner= (props) => {

    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body>
               <Popover.Header as="h2">Accesibilidad</Popover.Header>
                Actividad disponible para todas las edades. Disponemos de bicicletas accesibles para personas con movilidad reducida en el tren inferior así como sillines con capacidad para niños menores de 5 años (peso máximo 20kg)
                <Popover.Header as="h2">Duración</Popover.Header>
                5 horas

            </Popover.Body>
        </Popover>
    );
    const popover2 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <Popover.Header as="h2">Accesibilidad</Popover.Header>
                Actividad disponible para todas las edades. Pasarela para silla de ruedas disponible bajo reserva
                <Popover.Header as="h2">Duración</Popover.Header>
                4 horas
            </Popover.Body>
        </Popover>
    );
    const popover3= (
        <Popover id="popover-basic">
            <Popover.Body>
                <Popover.Header as="h2">Accesibilidad</Popover.Header>
                Actividad disponible para todas las edades. Accesibilidad garantizada para sillas de ruedas
                <Popover.Header as="h2">Duración</Popover.Header>
                4 horas
            </Popover.Body>
        </Popover>
    );
    const popover4 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <Popover.Header as="h2">Accesibilidad</Popover.Header>
                Actividad disponible para todas las edades. El acceso al huerto en silla de ruedas está garantizado
                <Popover.Header as="h2">Duración</Popover.Header>
                3 horas
            </Popover.Body>
        </Popover>
    );
    const popover5 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <Popover.Header as="h2">Accesibilidad</Popover.Header>
                Actividad disponible para todas las edades. El acceso al museo y al restaurante en silla de ruedas está garantizado
                <Popover.Header as="h2">Duración</Popover.Header>
                2 horas
            </Popover.Body>
        </Popover>
    );

    const Example1 = () => (
        <OverlayTrigger trigger="click" placement="top" overlay={popover1}>
            <Button variant="success" > ⓘ  </Button>
        </OverlayTrigger>
    );
    const Example2 = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
            <Button variant="success" > ⓘ </Button>
        </OverlayTrigger>
    );
    const Example3 = () => (
        <OverlayTrigger trigger="click" placement="top" overlay={popover3}>
            <Button variant="success"> ⓘ </Button>
        </OverlayTrigger>
    );
    const Example4 = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover4}>
            <Button variant="success" > ⓘ </Button>
        </OverlayTrigger>
    );
    const Example5 = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover5}>
            <Button variant="success"> ⓘ </Button>
        </OverlayTrigger>
    );

    return <Carousel className={"BS-Carousel"}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn2.civitatis.com/espana/viladrau/tour-bicicleta-electrica-parque-montseny.jpg"
                alt="First slide"
            />
            <div className={"BS-Carousel-Info"}>
                <Carousel.Caption>
                    <h5>Paseo en bicicleta por el Montseny</h5>
                    <p>Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny.</p>
                    <div className={"etiquetascarousel"}>
                        <ul>
                            <li>montaña</li>
                            <li>bicicleta</li>
                            <li>excursión larga</li>
                        </ul>
                    </div>
                    <div className={"buttonscarousel"}>
                        <Example1 />
                        <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
                    </div>
                </Carousel.Caption>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.trackstour.com/wp-content/uploads/2020/01/tracks-montseny-btt-2.jpg"
                alt="Second slide"
            />
            <div className={"BS-Carousel-Info"}>
                <Carousel.Caption>
                    <h5> Descubre la costa en barco de vela </h5>
                    <p>Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona </p>
                    <div className={"etiquetascarousel"}>
                        <ul>
                            <li>playa</li>
                            <li>barco</li>
                            <li>excursión larga</li>
                        </ul>
                    </div>
                    <div className={"buttonscarousel"}>
                        <Example2  />
                        <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
                    </div>
                </Carousel.Caption>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://s3-eu-west-1.amazonaws.com/gr-cms/media/featured_images/none/b5c814af-3f17-433d-96e9-b32e7bc5c0b2/cesar-cid-ruta-en-moto-montmelo-montseny-27.jpg"
                alt="Third slide"
            />
            <div className={"BS-Carousel-Info"}>
                <Carousel.Caption>
                    <h5> Descubre la Barcelona Modernista de noche </h5>
                    <p> En esta excursión de cuatro horas, descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí </p>
                    <div className={"etiquetascarousel"}>
                        <ul>
                            <li>ciudad</li>
                            <li>a pie</li>
                            <li>excursión larga</li>
                        </ul>
                    </div>
                    <div className={"buttonscarousel"}>
                        <Example3 />
                        <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
                    </div>
                </Carousel.Caption>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://s3-eu-west-1.amazonaws.com/gr-cms/media/featured_images/none/b5c814af-3f17-433d-96e9-b32e7bc5c0b2/cesar-cid-ruta-en-moto-montmelo-montseny-27.jpg"
                alt="Third slide"
            />
            <div className={"BS-Carousel-Info"}>
                <Carousel.Caption>
                    <h5> Del huerto a la mesa </h5>
                    <p>Comparte con los más pequeños las maravillas de la naturaleza</p>
                    <div className={"etiquetascarousel"}>
                        <ul>
                            <li>montaña</li>
                            <li>a pie</li>
                            <li>excursión corta</li>
                        </ul>
                    </div>
                    <div className={"buttonscarousel"}>
                        <Example4 />
                        <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
                    </div>
                    </Carousel.Caption>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://s3-eu-west-1.amazonaws.com/gr-cms/media/featured_images/none/b5c814af-3f17-433d-96e9-b32e7bc5c0b2/cesar-cid-ruta-en-moto-montmelo-montseny-27.jpg"
                alt="Third slide"
            />
            <div className={"BS-Carousel-Info"}>
                <Carousel.Caption>
                    <h5> Arte en la montaña sagrada </h5>
                    <p>Disfruta de la impresionante Montaña de Montserrat donde encontraréis el Museo con las salas modernistas de Puig i Cadafalch</p>
                    <div className={"etiquetascarousel"}>
                        <ul>
                            <li>montaña</li>
                            <li>a pie</li>
                            <li>excursión corta</li>
                        </ul>
                    </div>
                    <div className={"buttonscarousel"}>
                        <Example5 />
                        <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
                    </div>
                </Carousel.Caption>
            </div>
        </Carousel.Item>
    </Carousel>
}