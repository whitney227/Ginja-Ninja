import React, {Component} from 'react'
import Title from './Title';
import {GiFishingBoat, GiFishingPole, GiFishing} from "react-icons/gi"

export default class Charters extends Component {
    state={
        packages :[
            {
                icon:<GiFishingBoat/>,
                title: "Tours",
                info: "Set your own time and destination.  Enjoy a booze cruise with friends or watch the dolphins at sunset.  Popular destinations include Charleston Harbor and Shem Creek.",
                cost: "$200/hour (3 hour minimum)",
            },
            {
                icon:<GiFishingPole/>,
                title: "10 Hour Trip",
                info: "Depart at 5am and head to the gulf stream for Mahi Mahi, tuna, and wahoo.  Trip includes bottom fishing for snapper, grouper, amberjack, triggerfish, Cobia, and kingfish if requested by client.  Return to dock at 3pm.",
                cost: "$2100 (plus tip)",
            },
            {
                icon:<GiFishing/>,
                title: "12 Hour Trip",
                info: "Depart at 5am for gulf stream and fish for Mahi Mahi, tuna, wahoo, sailfish, marlin, and possibly swordfish.  Bottom fishing also included by request.  Return to dock at 5pm.",
                cost: "$2400 (plus tip)",
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="Packages" />
                
                <div className="services-center">
                    {this.state.packages.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.info}</p>
                            <ul>{item.cost}</ul>
                        </article>
                    })}
                   
                </div>

            </section>
        );
    }
}