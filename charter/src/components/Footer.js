import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import {FaCameraRetro} from 'react-icons/fa'

export default class Footer extends  Component {
    render(){
        return (
            <nav className="footer">Connect with Us
                <div className="">
                    <FaCameraRetro />
                            
                </div>
             </nav>
        );
    }
}