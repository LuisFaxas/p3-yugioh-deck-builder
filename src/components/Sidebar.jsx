import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
  const [decks, setDecks] = useState([]);

  const addDeck = () => {
    const newDeckName = prompt('Enter deck name');
    if (newDeckName) {
      setDecks(prevDecks => [...prevDecks, newDeckName]);
    }
  };

  const removeDeck = (deckToRemove) => {
    setDecks(prevDecks => prevDecks.filter(deck => deck !== deckToRemove));
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
        {decks.map((deck, index) => (
          <ListGroup.Item key={index}>
            {deck}
            <Button variant="danger" onClick={() => removeDeck(deck)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;