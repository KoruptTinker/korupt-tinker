import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {FaBookOpen} from 'react-icons/fa';
import "../assets/css/components.css";

class Education extends Component{
    render(){
        return (
           <Container className="edu-container" fluid>
               <Row>
                   <Col className="edu-header-col">
                        <Row className="edu-icon-row">
                            <FaBookOpen className="edu-icon"/>
                        </Row>
                        <Row>
                            <p>
                                <h2 className="edu-header">
                                    Education
                                </h2>
                            </p>
                        </Row>
                   </Col>
                   <Col className="edu-info-col">
                        <Row>
                            <p>
                                <h2 className="about-heading">
                                    Bennett University
                                </h2>
                                <p className="edu-info">
                                    B.tech (CSE)
                                </p>
                                <p className="edu-duration">
                                    August 2018-June 2022 
                                </p>
                            </p>
                        </Row>
                        <Row>
                            <p>
                                <h2 className="about-heading">
                                    Bharatiya Vidya Bhavan
                                </h2>
                                <p className="edu-info">
                                    High-school certificate
                                </p>
                            </p>
                        </Row>
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Education;