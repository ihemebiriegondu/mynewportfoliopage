import React from 'react'
import Card from 'react-bootstrap/Card';
import "../CSS/cards.css"

const Cards = ({cardTitle, cardSubTitle, CardText}) => {
    return (
        <Card className="shadow py-4 px-3 cards">
            <Card.Body>
                <Card.Title><h3 className='h6 mb-3'>{cardTitle}</h3></Card.Title>
                <Card.Subtitle className="mb-2"><h5 className='h5 certificate mb-4'>{cardSubTitle}</h5></Card.Subtitle>
                <Card.Text>
                    {CardText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards