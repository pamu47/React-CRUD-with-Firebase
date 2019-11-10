import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import '../customStyles/custom.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({delay:800});

export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <Jumbotron data-aos={"fade-right"}>
                    <h3>Welcome to Event Manager 1.0</h3>
                    <p>
                        This is a simple event management tool where you can create, edit, delete(as an event organizer) or view and notifications(as a normal user)
                        about the events of your university.
                    </p>
                    <p>
                        <Button variant="primary">View Upcoming Events</Button>
                        <Link className="btn btn-success generalMargin" to='/signin'>Sign In</Link>
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}