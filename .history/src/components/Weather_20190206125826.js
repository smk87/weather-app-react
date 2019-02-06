import React, { Component } from "react";

export default class Weather extends Component {
  constructor() {
    super();

    this.state = {
      cityname: "",
      temp: "",
      maxtemp: "",
      mingtemp: "",
      icon: ""
    };
  }
  render() {
    return (
      <div className="mt-5 mr-2 h-50 w-25 card">
        <div>
          <img
            src="http://3.bp.blogspot.com/-9j20aNDWQFk/UQgZBMrATQI/AAAAAAAAlXM/b2d4T6ZvFbo/s1600/598.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body">
          <p class="card-text">City: {this.state.cityname}</p>
          <p class="card-text">City: {this.state.cityname}</p>
          <p class="card-text">City: {this.state.cityname}</p>
          <p class="card-text">City: {this.state.cityname}</p>
        </div>
      </div>
    );
  }
}
