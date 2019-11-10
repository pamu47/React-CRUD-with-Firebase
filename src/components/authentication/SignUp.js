import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ delay: 800 });


export default class SignUp extends Component {
    render() {
        return (
            <div>
                <Container data-aos={"fade-right"} className={'field'}>
                    <h2 className="generalMargin">Create Account</h2><hr />
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="John Doe" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="john.d@gmail.com" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicInstitute">
                            <Form.Label>Institute</Form.Label>
                            <Form.Control type="text" placeholder="SLIIT" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{marginBottom:10}}>
                            Create Account
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}