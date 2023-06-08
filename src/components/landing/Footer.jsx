import React from 'react';
import './footer.css';
import { Image } from 'react-bootstrap';


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

            <div style={{marginTop:"100px"}}>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                    <Image src='https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png' alt='Facebook' width="150" height="150" />
                </a>

                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <Image src='https://i.pinimg.com/originals/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.png' alt='Instagram' width="120" height="120" />
                </a>
            </div>

            <p>¿Quiénes somos?</p>

            <parrafo>Somos una Asociación Civil sin fines de lucro, cuyo objetivo es luchar por el desarrollo integral </parrafo>
            <parrafo> de la persona. Por eso que contamos con una gran variadad de cursos y actividades.</parrafo>

        </footer>
    );
}