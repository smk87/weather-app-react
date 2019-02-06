import React, { Component } from "react";

export default class DetailedWeather extends Component {
  render() {
    return (
      <div>
        <h1>{this.param.woeid}</h1>
      </div>
    );
  }
}
