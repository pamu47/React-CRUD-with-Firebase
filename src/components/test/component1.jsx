import React, { Component } from "react";
import ChildComponent from "./component2";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: "",
    };
  }

  handleCallback = (childData) => {
    this.setState({ childData: childData });
    // console.log()
  };

  render() {
    return (
      <div>
        <ChildComponent parentCallback = {this.handleCallback} />
        {this.state.childData}
      </div>
    );
  }
}

export default ParentComponent;
