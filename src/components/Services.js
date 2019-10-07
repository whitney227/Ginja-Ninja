import React, { Component } from 'react'
import {FaPhone, FaFish, FaGlassWhiskey, FaMapMarkerAlt} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaGlassWhiskey/>,
                title:"Food & Bev",
                info: "We provide coolers and ice for all food and beverages.  Snacks such as chips will be provided as well as water and gatorade.  Customers should bring any additional food or beverages they would like to eat or drink.",
                more:"No glass"
            },
            {
                icon:<FaMapMarkerAlt/>,
                title:"Location",
                info: "We are located in Charleston, SC.  All trips depart from Ripley Light Yacht Club. Gulf stream trips plan to arrive 15 minutes before departure time.",
                more: <a href="https://www.google.com/maps/place/Ripley+Light+Yacht+Club/@32.777527,-79.964026,15z/data=!4m5!3m4!1s0x0:0xbbd32a29f6ce8e4e!8m2!3d32.777527!4d-79.964026" 
                // eslint-disable-next-line
                target="_blank" style={{color:"black"}}>95 Ripley Point Drive</a>
                
               
            },
            {
                icon:<FaFish/>,
                title:"Services",
                info:"Fish cleaning and fishing licenses are included in all packages.  We also supply gear, tackle, and bait.",
                more:"Tipping is customary"
            },
            {
                icon:<FaPhone/>,
                title:"Contact",
                info:"Call Captain Tripp Amick to book your next charter.  At least 3 days in advance on booking plus 25% deposit due.",
                more:'Phone: 803-924-5817'
                

            }

        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="General Info" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            <ul>{item.more}</ul>
                        </article>
                    })}
                </div>
                
            </section>
        );
    }
}
