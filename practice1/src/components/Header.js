import React from "react";
import "./Header.css";
import { Navbar,Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./Searchbar";


const Header = () => {
  return (
    <div>
      <h1 className="Header">TKMTUBE</h1>
      <SearchBar/>
      <Navbar  >
        <Container >
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className ="ms-auto" fontSize = "large">
            <Nav.Link href="#home">
                Gallery
                </Nav.Link>
            <Nav.Link href="#features" >Blog</Nav.Link>
            <Nav.Link href="#pricing" >Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
