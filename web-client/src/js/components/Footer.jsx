import * as React from "react";
import {Link} from "react-router-dom";

export const Footer = () => <section className={"footerSection"} id={"scrolltofooter"}>
                                <a><Link to={"/about"}>QUIÉNES SOMOS</Link></a>
                                <div className={"contactdetailsfooter"}>
                                    <p><span className={"contactcontentfooter"}>Teléfono:</span> 93 000 00 00 </p>
                                    <p><span className={"contactcontentfooter"}>Correo:</span> info@econotravel.com </p>
                                    <p><span className={"contactcontentfooter"}>Dirección:</span> Carrer dels Viatgers, 28, 08000 Barcelona </p>
                                </div>
                            </section>