import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./navigationBar";
import {Catalog} from "./catalog";
import {ExperiencePanel} from "./ExperiencePanel";
import {About} from "./about";

export const App = () => {

    return <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/catalog">
                <Catalog/>
            </Route>
            <Route path={"/experiencias"}>
                <ExperiencePanel/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
        </Switch>
    </Router>
}

