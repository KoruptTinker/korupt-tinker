import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import "../assets/css/components.css";

class Footer extends Component{
    render(){
        return(
            <Container fluid className="footer-bg">
                <Row className="footer-icon-row">
                    <Col>
                        <a href = "mailto: korupt.tinker@gmail.com">
                            <FaGithub className="footer-icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.github.com/KoruptTinker" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className="footer-icon"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/brijesh1373" target="_blank" rel="noreferrer">
                            <MdEmail className="footer-icon"/>
                        </a>
                    </Col>
                </Row>
                <br/>
                <Row className="footer-text-row">Designed using React-Bootstrap by<a href="https://www.github.com/KoruptTinker" className="footer-link"> Brijesh Kumar</a>.
                </Row>
            </Container>
        );
    }
}

export default Footer;