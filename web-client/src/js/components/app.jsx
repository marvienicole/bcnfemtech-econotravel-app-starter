import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./navigationBar";
import {Catalog, ExpirienceCard} from "./catalog";
import {ExperiencePanel} from "./ExperiencePanel";
import {About} from "./about";
import {reserveForm} from "./ReserveForm";
import {completedForm} from "./CompletedForm";
import {Footer} from "./Footer";
import {ScrollArrow} from "./ScrollArrow";


export const App = () => {

    const expiriencesList = [
        {
            photo1: 'Montseny-Bicicleta.jpg',
            photo2: 'montseny-tioenelbosque.jpg',
            title: "Paseo en bicicleta por el Montseny",
            description: "Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny. ",
            duration: "5",
            accesibility: "Actividad disponible para todas las edades. Disponemos de bicicletas accesibles para personas con movilidad reducida en el tren inferior así como sillines con capacidad para niños menores de 5 años (peso máximo 20kg). ",
            pricePerPerson: "250",
            etiquete1: "montaña",
            etiquete2: "bicicleta",
            etiquete3: "excursión larga"
        },
        {
            photo1: 'LaCosta-sailingship.jpg',
            photo2: 'LaCosta-sailingship.jpg',
            title: "Descubre la costa en barco de vela",
            description: "Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona. Una escapada veraniega apta incluso para los días más calurosos del año. Descubre los encantadores alrededores de la ciudad de Barcelona y visita desde el mar sus más impresionantes playas y calas." +
                "Comenzaremos la excursión en el Puerto de Barcelona, desde donde partiremos hacia el norte para visitar playas como la Mar Bella, la Playa de la Mora y la Playa de los Pescadores. " +
                "A bordo de la embarcación podremos disfrutar de una selección de quesos y embutidos catalanes acompañada de cava brut y zumos de frutas. Asimismo, pararemos cerca de la Playa de Montgat para realizar una actividad de buceo de superficie que nos permitirá apreciar la diversidad de la fauna marítima local y su ecosistema. Finalizaremos la excursión en el mismo puerto del que partimos.",
            duration: "4",
            accesibility: "Actividad disponible para todas las edades. Pasarela para silla de ruedas disponible bajo reserva. ",
            pricePerPerson: "280",
            etiquete1: "playa",
            etiquete2: "barco",
            etiquete3: "excursión larga"
        },
        {
            photo1: 'BcnNoche-4.jpg',
            photo2: 'BcnNoche-4.jpg',
            title: "Descubre la Barcelona Modernista de noche",
            description: "Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. En esta excursión de cuatro horas, descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí." +
                "El tour incluye visita guiada al interior de la Casa Batlló y la Sagrada Familia, así como parada para cenar en el restaurante típico catalán Can Masiá, donde disfrutaremos de las mejores carnes de la región acompañadas de vinos de las tierras del Baix Empordá. El restaurante también ofrece opciones vegetarianas y veganas así como menú para niños. Cava aparte.",
            duration: "4",
            accesibility: "Actividad disponible para todas las edades. Accesibilidad garantizada para sillas de ruedas.",
            pricePerPerson: "200",
            etiquete1: "ciudad",
            etiquete2: "a pie",
            etiquete3: "excursión larga"
        },
        {
            photo1: 'Huerto-exampl1.jpg',
            photo2: 'Huerto-exampl1.jpg',
            title: "Del huerto a la mesa",
            description: "Comparte con los más pequeños las maravillas de la naturaleza. En esta excursión breve de tres horas, podréis plantar vuestras propias hortalizas y verduras en el huerto de Can Gilabert, ubicado en el corazón del Montbaig. Durante una hora y media, aprenderéis a cuidar de vuestro propio huerto, plantaréis y abonaréis vuestras propias plantas, y también recogeréis parte de los ingredientes que los expertos chefs de Can Gilabert utilizarán para preparar la posterior cena, donde disfrutaréis de la experiencia de consumir productos recién recogidos de la tierra con vuestras propias manos. Actividad ideal para familiarizar a los más pequeños de la familia con el estilo de vida rural y la agricultura sostenible. Asimismo, obtendréis como obsequio una botella de aceite virgen extra cultivado y preparado en Can Gilabert, obra de la familia Gilabert, que lleva más de 80 años cultivando olivos. ",
            duration: "3",
            accesibility: "Actividad disponible para todas las edades. El acceso al huerto en silla de ruedas está garantizado.",
            pricePerPerson: "145",
            etiquete1: "montaña",
            etiquete2: "a pie",
            etiquete3: "excursión corta"
        },
        {
            photo1: 'Montserrat-portadamontaña.jpg',
            photo2: 'Montserrat-portadaconpersonas.jpg',
            title: "Arte en la montaña sagrada",
            description: "Disfruta de la impresionante Montaña de Montserrat donde encontraréis el Museo con las salas modernistas de Puig i Cadafalch, lugar que acoge colecciones de gran valor en el corazón de la emblemática montaña. En el Museo encontraréis pinturas del Renacimiento y del Barroco que conviven con autores de los siglos XIX y XX, objetos del Próximo Oriente y orfebrería. Además de disfrutar de un paseo guiado por la montaña y el Museo, esta actividad incluye tentempié variado acompañado de vino espumoso, cava brut o refresco. ",
            duration: "2",
            accesibility: "Actividad disponible para todas las edades. El acceso al museo y al restaurante en silla de ruedas está garantizado.",
            pricePerPerson: "125",
            etiquete1: "montaña",
            etiquete2: "a pie",
            etiquete3: "excursión corta"
        }
    ]


    return <Router>
        <ScrollArrow/>
        <NavigationBar/>
        <Switch>
            <Route exact path={"/catalog"} component={Catalog} expirience={expiriencesList}/>
            <Route path={"/experiencias"} component={ExperiencePanel}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/reserve"} component={reserveForm}/>
            <Route path={"/thanks"} component={completedForm}/>
            <Catalog expirience={expiriencesList}/>
        </Switch>
        <Footer/>
    </Router>
}