import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class EventDetails extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      id: id,
    });
  }
  render() {
    const { event } = this.props;
    if (event) {
      return (
        <div className="container pt-5">
          <div class="card border-light mb-3" style={{ maxWidth: "80rem" }}>
            <div class="card-header">{event.title}</div>
            <div class="card-body">
              <h5 class="card-title">{event.description}</h5>
              <p class="card-text">
                On {event.date} at {event.venue}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="container text-center">Loading.....</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null;
  return {
    event: event,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }])
)(EventDetails);
