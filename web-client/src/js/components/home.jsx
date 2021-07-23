import * as React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {CarouselItem} from "react-bootstrap";

export const Home= (props) => (
            <Carousel className={"BS-Carousel"}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn2.civitatis.com/espana/viladrau/tour-bicicleta-electrica-parque-montseny.jpg"
                            alt="First slide"
                        />
                        <div className={"BS-Carousel-Info"}>
                            <Carousel.Caption>
                                <h5>Paseo en bicicleta por el Montseny</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                                <h5> Arte en la montaña sagrada  </h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
            </Carousel>
);