import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const NavBar = () => {
    return (
        <div>
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
                    <Link to="/test" className="nav-link">Test</Link>
                </Nav>
            </Navbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(NavBar)