import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CardContext } from '../context/card.context'
import { Button, Form, ListGroup } from 'react-bootstrap';
import { BACKEND_URL } from '../services/BACKEND_URL.JS';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = ({ setDeckId }) => {

  const { decks, setDecks, getDecks } = useContext(CardContext)

  const navigate = useNavigate()

  const addDeck = () => {
    const newDeckName = prompt('Enter deck name');
    if (newDeckName) {
      axios.post(`${BACKEND_URL}/decks`, { name: newDeckName, cards: []})
        .then((response) => {
          console.log("New Deck", response.data)
          getDecks()
        })
        .catch((err) => {
          console.log(err)
        })

    }
  };

  const removeDeck = (deckToRemove) => {
    axios.delete(`${BACKEND_URL}/decks/${deckToRemove}`)
      .then((response) => {
        console.log("Deletion response", response.data)
        setDecks(prevDecks => prevDecks.filter(deck => deck.id !== deckToRemove));
      })
      .catch((err) => {
        console.log(err)
      })

  };


  return (
    <div className='sidebar'>
      <h2>Decks</h2>
      <Form>
        <Form.Group controlId="search">
          <Form.Control type="text" placeholder="Search decks" />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={addDeck}>Add Deck</Button>
      <ListGroup>
        {decks.map((deck) => (
          <ListGroup.Item key={deck.id}>
            <Link to={`/deck/${deck.id}`}>
              <h3 onClick={() => setDeckId(deck.id)}>{deck.name}</h3>
            </Link>
            <Button variant="danger" onClick={() => removeDeck(deck.id)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;