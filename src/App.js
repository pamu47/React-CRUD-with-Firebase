import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customStyles/custom.css';
import { Carousel, Navbar, Nav } from 'react-bootstrap';

import HomePage from './components/homeComponent';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import CreateEvent from './components/crud/CreateEvent';
import EventDetails from './components/crud/EventDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('./images/first.png')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 className="title">React + Redux + Firestore</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={require('./images/logo.svg')}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="mr-auto" varient="light">
            <Link to='/' className="nav-link">Home</Link>
            <Nav.Link href="#features">Upcoming</Nav.Link>
            <Nav.Link href="#pricing">Create/Manage</Nav.Link>

          </Nav>
        </Navbar>
      </div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/create' component={CreateEvent} />
      <Route exact path='/event' component={EventDetails} />
    </BrowserRouter>
  );
}

export default App;
