import React, { Component } from "react";
// import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Notification from "../notifications/Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

AOS.init({ delay: 800 });

class ViewEvents extends Component {
  render() {
    // console.log(this.props);
    const { events } = this.props;
    return (
      <div data-aos={"fade-right"} className="container pt-5">
        <div className="row">
          <div className="col col-lg-8 col-7">
            {events &&
              events.map((event) => {
                return (
                  <div key={event.id}>
                    <Link
                      to={'/event/'+event.id}
                      className={
                        "list-group-item list-group-item-action flex-column align-items-start due"
                      }
                      style={{ marginBottom: 5 }}
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{event.title}</h5>
                        <small>{event.date}</small>
                      </div>
                      <p className="mb-1">{event.description}</p>
                    </Link>
                  </div>
                );
              })}
          </div>

          <div className="col col-lg-4 col-5 align-self-center">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.firestore.ordered.events,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }])
)(ViewEvents);
