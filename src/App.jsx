import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardLibrary from './pages/CardLibrary';


function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cards')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Yu-Gi-Oh! Deck Builder</h1>
      <CardLibrary cards={cards} />
      
    </div>
  );
}

export default App;

/* {
  "date": "Apr 22, 2017 1:18:37 AM",
  "cards": [
    {
      "id": 30438,
      "title": "\"A\" Cell Breeding Device",
      "wikiUrl": "/wiki/%22A%22_Cell_Breeding_Device",
      "image": "ACellBreedingDevice-FOTB-EN-C-UE.png",
      "lore": "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
      "archetypesRelated": [
        "Alien"
      ],
      "actions": [
        "Distributes A-Counter(s)"
      ],
      "effectTypes": [
        "Trigger-like"
      ],
      "imageUrl": "https://vignette1.wikia.nocookie.net/yugioh/images/1/1d/ACellBreedingDevice-FOTB-EN-C-UE.png",
      "tips": [
        {
          "value": " This card can be searched by \"Dark Sage\", \"Ancient Gear Drill\", \"Alchemic Magician\", \"Angmarl the Fiendish Monarch\", \"Left Arm Offering\", \"Watch Dog\" and \"The Despair Uranus\"."
        },
        {
          "value": " With \"Alien Telepath\" and \"\"A\" Cell Incubator\" on the field combined with this, you can keep saving up A-Counters until it\u0027s destroyed."
        },
        {
          "value": " Use \"Light of Intervention\" or \"Ceasefire\" to get your opponent\u0027s monsters face-up to use \"\"A\" Cell Breeding Device\" each turn."
        }
      ],
      "sets": [
        {
          "number": "FOTB-EN043",
          "setName": "Force of the Breaker",
          "rarity": "Common"
        }
      ]
    }, */