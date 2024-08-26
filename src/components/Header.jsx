import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-brands fa-youtube fa-beat" style={{color: "#B197FC"}}></i>
            {' '}
            
            Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header