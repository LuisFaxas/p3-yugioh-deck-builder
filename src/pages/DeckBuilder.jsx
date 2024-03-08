import React from "react";
import "./DeckBuilder.css";
import "./CardLibrary.css";
import { Button, Card, ListGroup } from "react-bootstrap";

const DeckBuilder = ({ deck, removeCard }) => {
  return (
    <div className='card-library'>
      <h2>Deck Builder</h2>
      <div className="cards-container">
        {deck.map((card, index) => (
          <Card className="card-item" key={index}>
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <button className="delete-button" variant="danger" onClick={() => removeCard(card)}>
                x
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeckBuilder;
