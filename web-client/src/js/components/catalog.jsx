import * as React from "react";
import {ExperiencePanel} from "./ExperiencePanel";



export const Catalog = (props) => (

    <section className="catalogSection">
        {props.expiriences.map(experiences =>
        <ExperiencePanel expirience={experiences}/>
        )}
    </section>
);