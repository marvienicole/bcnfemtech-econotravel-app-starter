import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./navigationBar";
import {Catalog, ExpirienceCard} from "./catalog";
import {ExperiencePanel} from "./ExperiencePanel";
import {About} from "./about";
import {reserveForm} from "./ReserveForm";
import {completedForm} from "./CompletedForm";

export const App = () => {

    const expiriencesList = [
        {
            title: "Paseo en bicicleta por el Montseny",
            description:"Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny. ",
            duration:"5",
            accesibility: "Actividad disponible para todas las edades. Disponemos de bicicletas accesibles para personas con movilidad reducida en el tren inferior así como sillines con capacidad para niños menores de 5 años (peso máximo 20kg). ",
            pricePerPerson:"250",
            etiquete: ("montaña","bicicleta", "excursión larga")
        },
        {
            title: "titulo 2",
            description:"asdasdad",
            duration:"23423",
            accesibility: "sadasd",
            pricePerPerson:"3424",
            etiquete:"ahaha"
        },
        {
            title: "titurlo3",
            description:"",
            duration:"234",
            accesibility: "",
            pricePerPerson:"23432",
            etiquete:"nadar"
        },
        {
            title: "titulo4",
            description:"dsfdsfsd",
            duration:"234",
            accesibility: "776hfhgfhfghgfhfg",
            pricePerPerson:"2344",
            etiquete:"saltar"
        },
        {
            title: "titulo5",
            description:"sdfsfsdfsdfdsfsfsfdsfsd",
            duration:"4545",
            accesibility: "facil",
            pricePerPerson:"345",
            etiquete:"hacer el idiota"
        }
    ]



    return <Router>
                <NavigationBar/>
                <Switch>
                    <Route exact path={"/catalog"} component={Catalog}  expirience={expiriencesList}/>
                    <Route path={"/experiencias"} component={ExperiencePanel}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/reserve"} component={reserveForm}/>
                    <Route path={"/thanks"} component={completedForm}/>
                    <Catalog expirience={expiriencesList}/>

                </Switch>
            </Router>
}