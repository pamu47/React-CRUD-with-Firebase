import React, { Component } from "react";
import { createEvent } from "../../store/actions/eventActions";
import { connect } from "react-redux";
// import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Notification from "../notifications/Notifications";

AOS.init({ delay: 800 });

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      venue: "",
      description: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // const event = {
    //     title: this.state.title,
    //     date: this.state.date,
    //     venue: this.state.venue,
    //     description: this.state.description
    // }
    this.props.createEvent(this.state);
  }

  render() {
    return (
      <div data-aos={"fade-right"} className="container pt-5">
        <div class="row">
          <div class="col col-lg-8 col-12">
            <div data-aos={"fade-right"} className="container">
              <h2 className="generalMargin">Create an Event</h2>
              <hr />
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control
                    isValid={false}
                    type="text"
                    name="title"
                    placeholder="Software Freedom Day"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={this.onChange}
                    name="date"
                  />
                  {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicInstitute">
                  <Form.Label>Venue</Form.Label>
                  <Form.Control
                    type="text"
                    name="venue"
                    placeholder="Auditorium"
                    onChange={this.onChange}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Event description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    onChange={this.onChange}
                    rows="4"
                    placeholder="Say something about the event"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginBottom: 10 }}
                >
                  Post Event
                </Button>
              </Form>
            </div>
          </div>
          <div class="col col-lg-4 col-4">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
  };
};

export default connect(null, mapDispatchToProps)(CreateEvent);
