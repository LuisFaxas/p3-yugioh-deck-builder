import React, { useState } from 'react';

function CardLibrary({ cards }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 50;

  // Calculate the index of the first and last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Get the cards for the current page
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {currentCards.map(card => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <img src={card.imageUrl} alt={card.title} />
          <p>{card.lore}</p>
          {/* Display other card properties as needed */}
        </div>
      ))}
      <button disabled={currentPage === 1} onClick={handlePreviousPage}>Previous</button>
      <button disabled={indexOfLastCard >= cards.length} onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default CardLibrary;