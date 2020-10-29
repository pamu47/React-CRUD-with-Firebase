import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../customStyles/custom.css";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ delay: 800 });

class SignIn extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: "",
      password: "",
      show: false,
      user: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { authError } = this.props;
    return (
      <Container data-aos={"fade-right"} className={"field"}>
        <h2 className="generalMargin">Sign In</h2>
        <hr />
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.onChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <Link
          className="btn btn-success"
          to="/signup"
          style={{ marginTop: 10 }}
        >
          Create Account
        </Link>

        <br />
        {authError ? (
          <div className="alert alert-danger" role="alert">
            {authError}
          </div>
        ) : (
          <div></div>
        )}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Email you entered : {this.state.email}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
