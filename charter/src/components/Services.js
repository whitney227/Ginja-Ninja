import React, { Component } from 'react'
import {FaPhone, FaFish, FaGlassWhiskey, FaMapMarkerAlt} from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaGlassWhiskey/>,
                title:"Food & Bev",
                info: "We provide coolers and ice for all food and beverages.  Snacks such as chips will be provided as well as water and gatorade.  Customers should bring any additional food or beverages they would like to eat or drink.  No glass, please."
            },
            {
                icon:<FaMapMarkerAlt/>,
                title:"Location",
                info: "We are located in Charleston, SC.  All trips depart from Ripley Light Yacht Club.",
                address:"95 Ripley Point Drive"
            },
            {
                icon:<FaFish/>,
                title:"Services",
                info:"Fish cleaning and fishing licenses are included in all packages.  We also supply gear, tackle, and bait."
            },
            {
                icon:<FaPhone/>,
                title:"Contact",
                contact:""

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
                            <ul>{item.contact}</ul>
                        </article>
                    })}
                </div>
                
            </section>
        );
    }
}
