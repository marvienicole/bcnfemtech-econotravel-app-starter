import * as React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {NavigationBar} from "./navigationBar";
import {Catalog} from "./catalog";
import {ExperiencePanel} from "./ExperiencePanel";
import {QuienesSomos} from "./quienessomos";

export const App = () => {


    return <Router>
        <NavigationBar/>
            <Switch>
                <Route exact path={"/catalog"} component={Catalog}/>
                <Route path={"/experiencias"} component={ExperiencePanel}/>
                <Route path={"/quienessomos"} component={QuienesSomos}/>
            </Switch>
    </Router>
}