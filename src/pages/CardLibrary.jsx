import React, { useState } from 'react';
import './CardLibrary.css';
import { Button, Card, ListGroup, Pagination } from 'react-bootstrap';


const CardLibrary = ({ cards, addCardToDeck }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (direction) => {
    if (direction === 'next' && currentPage < Math.ceil(cards.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  

  return (
    <div className='card-library'>
      <h2>Card Library</h2>
      <div className='cards-container'>
        {currentCards.map((card, index) => (
            <Card className='card-item' key={index}>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <button className='add-button' variant="primary" onClick={() => addCardToDeck(card)}>Add</button>
              </Card.Body>
            </Card>
          
        ))}
      </div>
      <Pagination>
        <Pagination.Prev onClick={() => paginate('prev')} />
        <Pagination.Next onClick={() => paginate('next')} />
      </Pagination>
    </div>
  );
};

export default CardLibrary;