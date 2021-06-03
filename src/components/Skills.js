import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FaTools} from 'react-icons/fa';
import "../assets/css/components.css";

class Skills extends Component{
    render(){
        return(
            <Container fluid className="skills-container"> 
                <Row>
                    <Col className="skills-head-col">
                        <Row>
                            <FaTools className="skills-icon"/>
                        </Row>
                        <Row>
                            <p>
                                <h2 className="skills-heading">
                                    Skills
                                </h2>
                            </p>
                        </Row>
                    </Col>
                    <Col className="skills-info-col">
                        <Row>
                            <h2 className="skills-subhead">
                                Programming
                            </h2>
                            <ProgressBar className="skill-bar" label="Java" animated now={80} variant='success'/>
                            <ProgressBar className="skill-bar" label="C++" animated now={60} variant='success'/>
                        </Row>
                        <Row>
                            <h2 className="skills-subhead">
                                Scripting Languages
                            </h2>
                            <ProgressBar className="skill-bar" label="Python" animated now={85} variant="success"/>
                            <ProgressBar className="skill-bar" label="Javascript" animated now={75} variant="success"/>
                        </Row>
                        <Row>
                            <h2 className="skills-subhead">
                                Web Technologies
                            </h2>
                            <ProgressBar className="skill-bar" label="HTML" animated now={85} variant="success"/>
                            <ProgressBar className="skill-bar" label="CSS" animated now={75} variant="success"/>
                            <ProgressBar className="skill-bar" label="React" animated now={75} variant="success"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Skills;