import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class EventDetails extends Component {
    constructor() {
        super()
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div className="container pt-5">
                <div class="card border-light mb-3" style={{ maxWidth: "80rem" }}>
                    <div class="card-header">Event Name ___ {this.state.id}</div>
                    <div class="card-body">
                        <h5 class="card-title">A descriptive text</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
        );
    }
}