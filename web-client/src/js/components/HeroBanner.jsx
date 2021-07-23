import * as React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {Button, CarouselItem, OverlayTrigger, Popover} from "react-bootstrap";
import {Link} from "react-router-dom";

export const HeroBanner= (props) => {

    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body>
                Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny.
            </Popover.Body>
        </Popover>
    );
    const popover2 = (
        <Popover id="popover-basic">
            <Popover.Body>
                Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona. Una escapada veraniega apta incluso para los días más calurosos del año. Descubre los encantadores alrededores de la ciudad de Barcelona y visita desde el mar sus más impresionantes playas y calas.
                Comenzaremos la excursión en el Puerto de Barcelona, desde donde partiremos hacia el norte para visitar playas como la Mar Bella, la Playa de la Mora y la Playa de los Pescadores.
                A bordo de la embarcación podremos disfrutar de una selección de quesos y embutidos catalanes acompañada de cava brut y zumos de frutas. Asimismo, pararemos cerca de la Playa de Montgat para realizar una actividad de buceo de superficie que nos permitirá apreciar la diversidad de la fauna marítima local y su ecosistema. Finalizaremos la excursión en el mismo puerto del que partimos.
            </Popover.Body>
        </Popover>
    );
    const popover3= (
        <Popover id="popover-basic">
            <Popover.Body>
                Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. En esta excursión de cuatro horas, descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí.
                El tour incluye visita guiada al interior de la Casa Batlló y la Sagrada Familia, así como parada para cenar en el restaurante típico catalán Can Masiá, donde disfrutaremos de las mejores carnes de la región acompañadas de vinos de las tierras del Baix Empordá. El restaurante también ofrece opciones vegetarianas y veganas así como menú para niños. Cava aparte.
            </Popover.Body>
        </Popover>
    );
    const popover4 = (
        <Popover id="popover-basic">
            <Popover.Body>
                Comparte con los más pequeños las maravillas de la naturaleza. En esta excursión breve de tres horas, podréis plantar vuestras propias hortalizas y verduras en el huerto de Can Gilabert, ubicado en el corazón del Montbaig. Durante una hora y media, aprenderéis a cuidar de vuestro propio huerto, plantaréis y abonaréis vuestras propias plantas, y también recogeréis parte de los ingredientes que los expertos chefs de Can Gilabert utilizarán para preparar la posterior cena, donde disfrutaréis de la experiencia de consumir productos recién recogidos de la tierra con vuestras propias manos. Actividad ideal para familiarizar a los más pequeños de la familia con el estilo de vida rural y la agricultura sostenible. Asimismo, obtendréis como obsequio una botella de aceite virgen extra cultivado y preparado en Can Gilabert, obra de la familia Gilabert, que lleva más de 80 años cultivando olivos.
            </Popover.Body>
        </Popover>
    );
    const popover5 = (
        <Popover id="popover-basic">
            <Popover.Body>
                Disfruta de la impresionante Montaña de Montserrat donde encontraréis el Museo con las salas modernistas de Puig i Cadafalch, lugar que acoge colecciones de gran valor en el corazón de la emblemática montaña. En el Museo encontraréis pinturas del Renacimiento y del Barroco que conviven con autores de los siglos XIX y XX, objetos del Próximo Oriente y orfebrería. Además de disfrutar de un paseo guiado por la montaña y el Museo, esta actividad incluye tentempié variado acompañado de vino espumoso, cava brut o refresco.
            </Popover.Body>
        </Popover>
    );

    const Example1 = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
            <Button variant="success" > info </Button>
        </OverlayTrigger>
    );
    const Example2 = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
            <Button variant="success" > info </Button>
        </OverlayTrigger>
    );
    const Example3 = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
            <Button variant="success" > info </Button>
        </OverlayTrigger>
    );
    const Example4 = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover4}>
            <Button variant="success" > info </Button>
        </OverlayTrigger>
    );
    const Example5 = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover5}>
            <Button variant="success" > info </Button>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><Example1 />
                    <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><Example2 />
                    <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><Example3/>
                    <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
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
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p><Example4/>
                    <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
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
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p><Example5/>
                    <Link to={"/reserve"}> <Button className="btn btn-warning"> Reserve </Button> </Link>
                </Carousel.Caption>
            </div>
        </Carousel.Item>
    </Carousel>
}