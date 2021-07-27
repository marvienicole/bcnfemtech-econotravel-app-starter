import * as React from "react";
import {Link} from "react-router-dom";

export const Footer = () => (
<section className={"footerSection"} id={"scrolltofooter"}>
        <div className={"aboutusfooter"}>
            <div className={"aboutusfooter-links"}>
                <a><Link to={"/home"}> <img src="/transparentLogo.png" alt={""} /> </Link></a>
                <a><Link to={"/about"}>Conoce #ECONOTRAVEL</Link></a>
            </div>
            <div className={"aboutusfooter-socialmedia"}>
                <img src="/logo-instagram.png" alt={""} />
                <img src="/logo-facebook.png" alt={""} />
                <img src="/logo-twitter.png" alt={""} />
            </div>
        </div>

        <div className={"contactdetailsfooter"}>
               <h2>Atención al cliente</h2>
                   <div className={"logo-phone"}>
                      <img src={"/logo-phone-callblack.png"} alt={""} />
                       <p> 93 000 00 00 </p>
                   </div>
                   <div className={"logo-mail"}>
                       <img src={"/logo-email.png"} alt={""} />
                       <p>info@econotravel.com </p>
                   </div>
                    <div className={"logo-pin"}>
                        <img src={"/logo-pin.png"} alt={""} />
                        <p> Carrer dels Viatgers, 28, 08000 Barcelona </p>
                    </div>
        </div>
</section>
)