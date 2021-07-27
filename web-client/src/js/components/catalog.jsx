import * as React from "react";
import {ExpirienceCard} from "./ExpirienceCard";
import {HeroBanner} from "./HeroBanner";
import {CardGroup} from "react-bootstrap";




export const Catalog = (props) => <section className={"catalogSection"}>
                <HeroBanner/>
                <CardGroup className={"cardAlignment"}>
                    <h1 className={"ExperienceTitle"}> ¡Descubre nuestras experiencias!</h1>
                    {props.expirience.map(experiences1 =>
                        <ExpirienceCard expirience={experiences1}/>
                    )}
                </CardGroup>
            </section>
