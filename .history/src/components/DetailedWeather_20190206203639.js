import React, { Component } from "react";
import Weather from "./Weather";
import axios from "axios";

export default class DetailedWeather extends Component {
  constructor() {
    super();

    this.state = {
      cityname: "",
      temp: "",
      maxtemp: "",
      mintemp: "",
      logo: "",
      day: ""
    };
  }

  componentWillMount() {
    const url = `weather/weather.php?command=location&woeid=${
      this.props.match.params.woeid
    }`;
    // console.log(url);
    axios
      .get(url) //Used proxy to connect with local wamp server
      .then(res => {
        const detailedweather = res.data;
        console.log(detailedweather);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className=" mt-5 mx-auto h-50 w-25 card">
        <img
          src={this.state.logo}
          className="card-img-top pl-2 pr-2"
          alt="..."
        />
        <div className="card-body">
          <div className="card-text">
            <h2>{this.state.cityname}</h2>
          </div>
          <div className="card-text">
            <h5>Temparature: </h5> {this.state.temp}
            <span>&#8451;</span>
          </div>
          <div className="card-text">
            {" "}
            <h5>Maximum Temparature: </h5> {this.state.maxtemp}
            <span>&#8451;</span>
          </div>
          <div className="card-text">
            {" "}
            <h5>Minimum Temparature: </h5>
            {this.state.mintemp}
            <span>&#8451;</span>
          </div>
          <p />
        </div>
      </div>
    );
  }
}
