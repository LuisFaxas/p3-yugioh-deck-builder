import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CardLibrary.css';
import { Button, Card, ListGroup, Pagination, Navbar, Form, FormControl } from 'react-bootstrap';


const CardLibrary = ({ cards, addCardToDeck, deckId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const cardsPerPage = 12;



  console.log("this is deckId", deckId)

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

  

  // Filter cards based on search term
  const filteredCards = currentCards.filter(card => card.name && typeof card.name === 'string' && card.name.toLowerCase().includes(searchTerm.toLowerCase()));
  

  return (
    <div>
    <Navbar className='cd-navbar' bg="light" variant="light" >
        <div className='pagination'>
        <Pagination.Prev className='prev' onClick={() => paginate('prev')} />
        <Form >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={event => setSearchTerm(event.target.value)} />
        </Form>
        <Pagination.Next className='next' onClick={() => paginate('next')} />
      </div> 
    </Navbar>

    <div className='card-library'>
    {/* <Pagination className='pagination'>
        <Pagination.Prev className='prev' onClick={() => paginate('prev')} />
        <Pagination.Next className='next' onClick={() => paginate('next')} />
      </Pagination> */}
    {/*   <h2>Card Library</h2> */}
      
      <div className='cards-container'>
        {currentCards.map((card, index) => (
            <Card className='card-item' key={index}>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <button className='add-button' variant="primary" onClick={() => addCardToDeck(card.id, deckId)}>Add</button>
              </Card.Body>
            </Card>
          
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default CardLibrary;