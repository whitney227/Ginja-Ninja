import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {FaCameraRetro, FaMobileAlt, FaEnvelope, FaRegCopyright} from 'react-icons/fa'

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
                    <Nav.Item>
                        <FaMobileAlt style={{color: 'white'}}/>
                    </Nav.Item>
                    <Nav.Item>
                        <FaEnvelope style={{color: 'white'}}/>
                    </Nav.Item>
                </Nav>
                <p style={{fontSize:"18px", paddingTop:"10px"}}> 
                    <FaRegCopyright />
                    2019 Ginga Ninga Charters LLC
                </p>
             </Navbar>
             </>
        );
    }
}