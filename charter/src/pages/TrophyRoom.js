import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Hero from '../components/Hero'
import CardDeck from 'react-bootstrap/CardDeck'
import Card1 from "../images/card1.jpg"
import Card2 from"../images/card2.jpg"
import Card3 from"../images/card3.jpg"
import Card4 from"../images/card4.JPG"
import Card5 from"../images/card5.jpg"
import Card6 from"../images/card6.JPG"
import Card7 from "../images/card7.jpg"
import Card8 from "../images/card8.jpg"
import Card9 from "../images/card9.JPG"
import Card10 from "../images/card10.jpg"
import Card11 from "../images/card11.jpg"
import Card12 from "../images/card12.JPG"

const TrophyRoom = () => {
    return (
        <>
        <Hero hero="trophyHero" />
        <br></br>
        <Title title="Photo Gallery" />
        <CardDeck className="cardDeck">
            <Card image={Card1} />
            <Card image={Card2} />
            <Card image={Card3} />
            <Card image={Card4} />
        </CardDeck>
        <CardDeck className="cardDeck">
            <Card image={Card5} />
            <Card image={Card6} />
            <Card image={Card7} />
            <Card image={Card8} />
        </CardDeck>
        <CardDeck className="cardDeck">
            <Card image={Card9} />
            <Card image={Card10} />
            <Card image={Card11} />
            <Card image={Card12} />
        </CardDeck>
        <br></br>
        </>
    );
};
export default TrophyRoom
