import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./navigationBar";
import {Catalog} from "./catalog";
import {ExperiencePanel} from "./ExperiencePanel";
import {About} from "./about";
import {Home} from "./home";

export const App = () => {

    return <Router>
        <NavigationBar/>
        <Switch>
            <Route path={"/home"} component={Home}/>
            <Route exact path={"/catalog"} component={Catalog}/>
            <Route path={"/experiencias"} component={ExperiencePanel}/>
            <Route path={"/about"} component={About}/>
        </Switch>
    </Router>
}

