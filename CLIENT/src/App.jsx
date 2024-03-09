import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardContext } from './context/card.context';
import './App.css';
import axios from 'axios';
import CardLibrary from './pages/CardLibrary';
import NavigationBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DeckBuilder from './pages/DeckBuilder';
import { BACKEND_URL } from './services/BACKEND_URL.JS';

const App = () => {

  const { cards, getDecks } = useContext(CardContext)

  const [deckId, setDeckId ] = useState(0)


  const addCardToDeck = (card, deck) => {
    
    axios.get(`${BACKEND_URL}/decks/${deck}`)
      .then((response) => {
        let thisDeckCards = [...response.data.cards]
        thisDeckCards.push(card)
        axios.put(`${BACKEND_URL}/decks/${deck}`, {...response.data, cards: thisDeckCards})
          .then((response) => {
            console.log("Updated Deck", response.data)
            getDecks()
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const removeCard = (cardToRemove, deck) => {

    console.log("Deleting card from deck===>", cardToRemove, deck)

    axios.get(`${BACKEND_URL}/decks/${deck}`)
      .then((response) => {
        let thisDeckCards = [...response.data.cards]
        let newCards = thisDeckCards.filter((card) => card != cardToRemove)
        console.log("These are the new cards")
        axios.put(`${BACKEND_URL}/decks/${deck}`, {...response.data, cards: newCards})
          .then((response) => {
            console.log("Updated Deck", response.data)
            getDecks()
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })

  };

  return (
    <div className="App">
      <NavigationBar />
      <Sidebar setDeckId={setDeckId} />
      <div className='app-body'>

        <Routes>
          <Route path='/deck/:deckId' element={<DeckBuilder removeCard={removeCard} setDeckId={setDeckId}/>}/>
        </Routes>

        <CardLibrary cards={cards} addCardToDeck={addCardToDeck} deckId={deckId} />
      </div>
    </div>
  );
};

export default App;