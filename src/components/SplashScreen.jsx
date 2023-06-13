
import { Col, Image, Row } from "react-bootstrap";
import "../components-css/splash.css";

export default function Splash() {

    return (
        <div className="customContainer">
            <Row>
                <Col className="customColImage">
                    <Image src="/keriva/Images/icon-keriva.jpg" title="Keriva AC" className="imageK" />
                </Col>
                <Col className="customCol">
                    <div className="typing-container">
                        <h1 className="typing-text">Bienvenido a <br></br>Fundación Keriva A.C.</h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

