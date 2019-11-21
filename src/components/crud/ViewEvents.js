import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Notification from '../notifications/Notifications'
import { connect } from 'react-redux';

AOS.init({ delay: 800 });

class ViewEvents extends Component {
    render() {
        console.log(this.props)
        const { events } = this.props
        return (
            <div data-aos={"fade-right"} className="container">
                <div class="row">
                    <div class="col col-lg-8 col-7">
                        {
                            events && events.map(event => {
                                return (
                                    <div>
                                        <Link to='/event/1' className={'list-group-item list-group-item-action flex-column align-items-start due'} style={{ marginBottom: 5 }}>
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">{event.title}</h5>
                                                <small>{event.date}</small>
                                            </div>
                                            <p class="mb-1">{event.description}</p>
                                        </Link>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div class="col col-lg-4 col-5 align-self-center">
                        <Notification />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.event.events
    }
}

export default connect(mapStateToProps)(ViewEvents)