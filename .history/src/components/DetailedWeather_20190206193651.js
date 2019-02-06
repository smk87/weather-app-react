import React, { Component } from "react";

export default class DetailedWeather extends Component {
  render() {
    return (
      <div>
        <h1>{this.params}</h1>
      </div>
    );
  }
}
