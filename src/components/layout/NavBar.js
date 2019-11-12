import React from 'react';
import { Carousel, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../images/first.png')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="title">_ Redux + React + Firestore _</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src={require('../../images/logo.svg')}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto" varient="light">
                    <Link to='/' className="nav-link">Home</Link>
                    <Link to="/eventlist" className="nav-link">Upcoming</Link>
                    <Link to="/create" className="nav-link">Create/Manage</Link>

                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar