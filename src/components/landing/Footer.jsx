import React from "react";
import { Image, Row, Col } from 'react-bootstrap';
import facebookImage from "../../images/facebook-dark-pink.png";
import instagramImage from "../../images/instagram-dark-pink.png";
import whatsappImage from "../../images/whatsapp-dark-pink.png";
import "./footer.css"

export default function Footer() {
    const facebookUrl = 'https://www.facebook.com/KerivaAC';
    const instagramUrl = 'https://instagram.com/fundacion_kerivaac?igshid=MmJiY2I4NDBkZg==';
    const whatsUrl = "https://api.whatsapp.com/send?phone=+524491888898&text=Hola%20Fundación%20Keriva,%20me%20pueden%20dar%20información%20sobre...";
    const mapsUrl = "https://www.google.com/maps/place/Aldama+316+A,+Mart%C3%ADnez+Andrade,+20926+Jes%C3%BAs+Mar%C3%ADa,+Ags./@21.9571983,-102.344925,3a,75y,126.94h,69.4t/data=!3m6!1e1!3m4!1sSN7NTVtiEE1w7wF1OTZVow!2e0!7i16384!8i8192!4m7!3m6!1s0x8429ef54e0ef96b1:0xd0ff447556a0e605!8m2!3d21.9572173!4d-102.3448327!10e5!16s%2Fg%2F11c181rb38?entry=ttu";
    const gmailUrl = "https://mail.google.com/mail/?view=cm&to=kerivaac@gmail.com&su=Hola%20Fundación%20Keriva,%20me%20pueden%20dar%20información%20sobre...";
    return (
        <Row className="footer-container" >
            <Col xs={10} md={3} className="colc">
                <h3 className="title">Conoce más</h3>
                <p className="text"> <i>"Es una fundación sin fines de lucro que apoya a distintos sectores como lo son adultos mayores, adolescentes y niños"</i></p>
                <p>- Alejandro M</p>
            </Col>
            <Col xs={10} md={4} className="colc ">
                <h3 className="title">Contáctanos</h3>
                <ul className="text">
                    <li>Teléfono: 449 188 88 98</li>
                    <li>Whatsapp: <a
                        className="purple-link"
                        title='Keriva Ac'
                        href={whatsUrl}
                        target="_blank"
                        rel="noopener noreferrer">+52 1 449 188 88 98
                    </a>
                    </li>
                    <li>
                        Dirección: <a
                            className="purple-link"
                            title='Keriva Ac'
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >Aldama 316A Martínez Andrade Jesús María, Aguascalientes, Mexico
                        </a>
                    </li>
                    <li>
                        Email: <a
                            className="purple-link"
                            title='Keriva Ac'
                            href={gmailUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            kerivaac@gmail.com
                        </a>
                    </li>
                </ul>
            </Col>
            <Col xs={10} md={3} className="colc">
                <h3 className="title">Síguenos</h3>
                <div>
                    <a href={facebookUrl} title='Keriva Ac' target="_blank" rel="noopener noreferrer">
                        <Image className="icon-footer" title="Keriva" src={facebookImage} alt="Facebook" />
                    </a>
                    <a href={instagramUrl} title='Keriva Ac' target="_blank" rel="noopener noreferrer">
                        <Image className="icon-footer" title="Keriva" src={instagramImage} alt="Facebook" />
                    </a>
                    <a href={whatsUrl} title='Keriva Ac' target="_blank" rel="noopener noreferrer">
                        <Image className='icon-footer' title="Keriva" src={whatsappImage} alt='Whatsapp' />
                    </a>
                </div>
            </Col>
        </Row>
    );
}
