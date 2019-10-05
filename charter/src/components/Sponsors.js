import React, {Component} from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Title from "./Title";
import image from "../images/fishrzr.jpg"




export default class Sponsors extends Component {
    render(){
        return (
            <section className="sponsors">
                <Title title="Sponsors"/>

                <div className="sponsors-center">
                <Col xs={6} md={4}>
                    {/* eslint-disable-next-line */}
                    <a href="https://briny.com/" target="_blank">
                        <Image src="https://cdn.shopify.com/s/files/1/1129/0534/t/17/assets/logo.png?2681" />
                    </a>   
                </Col>
                <Col xs={6} md={4}>
                    {/* eslint-disable-next-line */}
                    <a href="https://www.engelcoolers.com/" target="_blank">
                        <Image src="https://www.engelcoolers.com/pub/media/logo/stores/1/Engel_Coolers_Logo_3.png" />
                    </a>
                </Col>
                <Col xs={6} md={4}>
                    {/* eslint-disable-next-line */}
                     <a href="https://fishrazr.com/" target="_blank">
                        <Image src={image}
                        style={{paddingTop:"0"}} />          
                     </a>
                </Col>
                </div>
            </section> 
            
            
            
           
           
        );
    }
}