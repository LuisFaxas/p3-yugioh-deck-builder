import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Image } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Yu-Gi-Oh! Deck Builder</Navbar.Brand>
      <Nav className="mr-auto">
        {/* Add any navigation links here */}
      </Nav>
      <Image src="path-to-your-image.jpg" roundedCircle />
    </Navbar>
  );
};

export default NavigationBar;