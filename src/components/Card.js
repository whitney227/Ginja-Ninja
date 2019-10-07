import React from 'react'
import Card from 'react-bootstrap/Card'


export default function Cards({image}){
    return (
        
        <Card>
            <Card.Img className="cardImg"src={image} />    
        </Card>

    )
}