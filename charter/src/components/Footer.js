import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {FaCameraRetro, FaMobileAlt, FaEnvelope} from 'react-icons/fa'

export default class Footer extends  Component {
    render(){
        return (
            <>
            <Navbar className="footer">
                <p>Connect with Us</p>
                <Nav className="mr-auto">
                    <Nav.Link target="_blank" href="https://www.instagram.com/ginja_ninja_fishingteam/">
                        <FaCameraRetro style={{color: 'white'}}/>
                    </Nav.Link>
                    <Nav.Link trigger="click" placement="top">
                        <FaMobileAlt style={{color: 'white'}}/>
                    </Nav.Link>
                    <Nav.Link>
                        <FaEnvelope style={{color: 'white'}}/>
                    </Nav.Link>

                </Nav>
             </Navbar>
             </>
        );
    }
}