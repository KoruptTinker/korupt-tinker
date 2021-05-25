import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "../assets/css/components.css";
import Profile from "../assets/images/profile.jpeg";

class About extends Component{
    render(){
        return(
            <Container className="about-background" fluid>
                <Row>
                    <Col className="profile-col">
                        <Image src={Profile} className="profile-image"></Image>
                    </Col>
                    <Col className="about-info-col">
                        <p className="about-info-text">
                            <h2 className="about-heading">
                                About me
                            </h2>
                            I am an enthusiastic and driven engineering student pursuing a Bachelors's degree from Bennett University. I am currently looking to secure a position to utilize my strong Machine Learning and Data Science knowledge tailored to the needs of the user. I also do like to work on game development and 3D designing in my free time.
                        </p>
                        <Row>
                            <Col className="about-info-col">
                                <p className="about-info-text">
                                    <h2 className="about-heading">
                                        Contact Details
                                    </h2>
                                    Chandigarh, <br/>
                                    India <br/><br/>
                                    <p className="contact-details">
                                        (+91)9872143204 <br/>
                                        korupt.tinker@gmail.com
                                    </p>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;