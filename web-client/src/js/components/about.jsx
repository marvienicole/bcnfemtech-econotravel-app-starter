import * as React from "react";

export const About = () => <section className="aboutSection">
        <div className={"aboutContent1"} id={"aboutcontent1"}>
            <div className={"founderInfo"}>
                <img src="/MarinaHerran.jpg" alt={"founderimg"}/>
                <div className={"founderDetails"}>
                    <p>Fundadora de Econotravel:</p>
                    <p>Marina Herrán</p>
                    <div className={"aboutInfo"}>
                        <p>
                            Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en
                            bicicleta por
                            Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas
                            que ofrecían ciudades
                            como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco
                            respetuosas con la naturaleza
                            y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales
                            de Cataluña.
                            Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia
                            de experiencias
                            turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació
                            Econotravel Barcelona.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={"contactDetails"}>
            <p><span className={"contactDetail"}>Teléfono:</span> 93 000 00 00 </p>
            <p><span className={"contactDetail"}>Correo:</span> info@econotravel.com </p>
            <p><span className={"contactDetail"}>Dirección:</span> Carrer dels Viatgers, 28, 08000 Barcelona </p>
        </div>
    </section>

