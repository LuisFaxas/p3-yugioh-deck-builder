import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CardLibrary from './pages/CardLibrary';
import NavigationBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DeckBuilder from './pages/DeckBuilder';



const App = () => {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get('http://localhost:3001/cards');
      setCards(response.data);
    };

    fetchCards();
  }, []);

  const addCardToDeck = (card) => {
    setDeck(prevDeck => [...prevDeck, card]);
  };

  const removeCard = (cardToRemove) => {
    setDeck(prevDeck => prevDeck.filter(card => card !== cardToRemove));
  };

  return (
    <div className="App">
      <NavigationBar />
      <Sidebar />
      <div className='app-body'>
        <DeckBuilder deck={deck} removeCard={removeCard} />
        <CardLibrary cards={cards} addCardToDeck={addCardToDeck} />
      </div>
    </div>
  );
};

export default App;