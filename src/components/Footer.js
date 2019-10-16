import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {FaCameraRetro, FaMobileAlt, FaEnvelope, FaRegCopyright, FaFacebookF} from 'react-icons/fa'
import ReactHintFactory from 'react-hint'
const ReactHint = ReactHintFactory(React)

export default class Footer extends  Component {
    render(){
        return (
            <>
            <Navbar className="footer">
                <p>Connect with Us</p>
                <Nav className="mr-auto">
                    <ReactHint className="tooltip" persist="true"
                    events={{click: true, focus: true}} />

                    <Nav.Link target="_blank" href="https://www.instagram.com/ginja_ninja_fishingteam/">
                        <FaFacebookF style={{color: 'white'}}/>
                    </Nav.Link>
                    <Nav.Link target="_blank" href="https://www.instagram.com/ginja_ninja_fishingteam/">
                        <FaCameraRetro style={{color: 'white'}}/>
                    </Nav.Link>
                    <Nav.Item data-rh="803-924-5817" data-rh-at="bottom">
                        <FaMobileAlt style={{color: 'white'}} />    
                    </Nav.Item>
                    <Nav.Item data-rh="trippamick@yahoo.com" data-rh-at="bottom">
                        <FaEnvelope style={{color: 'white'}} />
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