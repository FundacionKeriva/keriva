import React from 'react';
import { Image, Row } from 'react-bootstrap';
import facebookImage from "../../images/facebook.png";
import instagramImage from "../../images/instagram.png";
import whatsappImage from "../../images/whatsapp.png";
import './socialnetwork.css';


export default function Footer() {
    const facebookUrl = 'https://www.facebook.com/KerivaAC';
    const instagramUrl = 'https://instagram.com/fundacion_kerivaac?igshid=MmJiY2I4NDBkZg==';

    return (
        <footer className="footer">
            <div className="bubble-container">
                <div className="bubble bubble-1"></div>
                <div className="bubble bubble-2"></div>
                <div className="bubble bubble-3"></div>
                <div className="bubble bubble-4"></div>
                <div className="bubble bubble-5"></div>
                <div className="bubble bubble-6"></div>
                <div className="bubble bubble-7"></div>
                <div className="bubble bubble-8"></div>
                <div className="bubble bubble-9"></div>
                <div className="bubble bubble-10"></div>
                <div className="bubble bubble-11"></div>
                <div className="bubble bubble-12"></div>
                <div className="bubble bubble-13"></div>
                <div className="bubble bubble-14"></div>
                <div className="bubble bubble-15"></div>
                <div className="bubble bubble-16"></div>
            </div>

            <Row className='icons-container'>
                <div style={{ marginTop: "60px" }}>
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                        <Image className='icon' src={facebookImage} alt='Facebook' />
                    </a>

                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                        <Image className='icon' src={instagramImage} alt='Instagram' />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+524491888898&text=Hola%20Fundación%20Keriva,%20me%20pueden%20dar%20información%20sobre..." target="_blank" rel="noopener noreferrer">
                        <Image className='icon' src={whatsappImage} alt='Whatsapp' />
                    </a>

                </div>
                <div className='text-container' >
                    <div style={{ maxWidth: "60%" }}>
                        <p>¿Quiénes somos?</p>
                        <parrafo>Somos una Asociación Civil sin fines de lucro, cuyo objetivo es luchar por el desarrollo integral de la persona. Por eso que contamos con una gran variadad de cursos y actividades. </parrafo>
                    </div>
                </div>

            </Row>
        </footer>
    );
}