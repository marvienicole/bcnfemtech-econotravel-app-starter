import * as React from "react";
import {ExpirienceCard} from "./ExpirienceCard";
import {HeroBanner} from "./HeroBanner";
import {CardGroup} from "react-bootstrap";





export const Catalog = (props) => (
    <section className={"catalogSection"}>
        <HeroBanner/>
        <CardGroup className={"cardAlignment"} id={"expirienceslistscroll"}>
        { props.expirience.map( experiences1 =>
                <ExpirienceCard expirience={experiences1} />
                )}
        </CardGroup>
    </section>
)
