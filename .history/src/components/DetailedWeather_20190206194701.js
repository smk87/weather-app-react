import React, { Component } from "react";

export default class DetailedWeather extends Component {
  render() {
    return (
      <div>
        <h1>{console.log(this.props.children)}</h1>
      </div>
    );
  }
}
