import React, { Component } from "react";

export default class DetailedWeather extends Component {
  render() {
    return (
      <div>
        <h1>{req.params.woeid}</h1>
      </div>
    );
  }
}
