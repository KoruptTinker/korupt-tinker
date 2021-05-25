import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {IconContext} from 'react-icons';
import {BiChevronDownCircle} from 'react-icons/bi';
import "../assets/css/components.css";

class Home extends Component{
    render(){
        return(
            <Container className="background-home" fluid>
                <h1 className="intro-text">Brijesh Kumar Bhayana</h1>
                <Row className="icon-row">
                    <IconContext.Provider value={{className:"icons"}}>
                        <Col>
                            <h1>
                                <a href = "mailto: korupt.tinker@gmail.com">
                                    <MdEmail />
                                </a>
                            </h1>
                        </Col>
                        <Col>
                            <h1>
                                <a href="https://www.github.com/KoruptTinker" target="_blank" rel="noreferrer">
                                    <FaGithub/>
                                </a>
                            </h1>
                        </Col>
                        <Col>
                            <h1>
                                <a href="https://www.linkedin.com/in/brijesh1373" target="_blank" rel="noreferrer">
                                    <FaLinkedinIn />
                                </a>
                            </h1>
                        </Col>
                    </IconContext.Provider>
                </Row>
                <a href="#about">
                    <BiChevronDownCircle className="aboutIcon"/>
                </a>
            </Container>
        );
    }
}

export default Home;