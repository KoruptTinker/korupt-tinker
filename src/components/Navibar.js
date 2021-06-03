import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import "../assets/css/components.css";

class Navibar extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Brijesh Kumar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto center-navbar">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#edu">Education</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navibar;