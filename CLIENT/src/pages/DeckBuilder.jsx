import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CardContext } from "../context/card.context";
import "./DeckBuilder.css";
import "./CardLibrary.css";
import { Button, Card, ListGroup } from "react-bootstrap";

const DeckBuilder = ({ removeCard, setDeckId }) => {

  const { decks, cards } = useContext(CardContext)

  const [ deck, setDeck ] = useState(null)

  const [ theseCards, setTheseCards ] = useState([])

  const { deckId } = useParams() 

  useEffect(() => {

    if (decks.length) {
      let thisDeck = decks.find((deck) => deck.id == deckId)
      console.log("Found deck ===>", thisDeck, deckId )
      setDeck(thisDeck)
    }



    if (deck && cards.length) {
      let theseCards = cards.filter((card) => deck.cards.includes(card.id))
      console.log("These are the cards ===>", theseCards)
      setTheseCards(theseCards)
    }

    setDeckId(deckId)

    
  }, [deckId, deck, decks])

  return (
    <div className='card-library'>
      <h2>Deck Builder</h2>
      <div className="cards-container">
        {
          deck && 
          <>
            <h3>{deck.name}</h3>    
            {
              theseCards.map((card) => (
                <Card className="card-item" key={card.id}>
                  <Card.Img variant="top" src={card.imageUrl} />
                  <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <button className="delete-button" variant="danger" onClick={() => removeCard(card.id, deck.id)}>
                      x
                    </button>
                  </Card.Body>
                </Card>
              ))
            }
          </>
        }
      </div>
    </div>
  );
};

export default DeckBuilder;
