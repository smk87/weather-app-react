import React, { Component } from "react";
import axios from "axios";

export default class Weather extends Component {
  constructor() {
    super();

    this.state = {
      cityname: "",
      id: "",
      temp: "",
      maxtemp: "",
      mintemp: "",
      icon: ""
    };
  }

  componentWillMount() {
    console.log("Before");

    axios
      .get("weather/weather.php?command=location&woeid=1915035") //Used proxy to connect with local wamp server
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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
          <div class="card-text">
            <h5>City: </h5> {this.state.cityname}
            {this.props.id}
          </div>
          <div class="card-text">
            <h5>Temparature: </h5> {this.state.temp}
          </div>
          <div class="card-text">
            {" "}
            <h5>Maximum Temparature: </h5> {this.state.maxtemp}
          </div>
          <div class="card-text">
            {" "}
            <h5>Minimum Temparature: </h5>
            {this.state.mintemp}
          </div>
          <icon />
        </div>
      </div>
    );
  }
}
