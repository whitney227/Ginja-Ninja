import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import {FaCameraRetro} from 'react-icons/fa'

export default class Footer extends  Component {
    render(){
        return (
            <nav className="footer">
                <p>Connect with Us</p>
                <Card.Link target="_blank" href="https://www.instagram.com/ginja_ninja_fishingteam/">
                    <FaCameraRetro style={{color: 'white'}}/>
                </Card.Link>
             </nav>
        );
    }
}