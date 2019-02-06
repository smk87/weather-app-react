import React, { Component } from "react";
import Weather from "./Weather";
import axios from "axios";
import ConsolidatedWeather from "./ConsolidatedWeather";

export default class DetailedWeather extends Component {
  constructor() {
    super();

    this.state = {
      detailedweather: "",
      logo: "",
      cityname: ""
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
        this.setState({
          detailedweather: res.data.consolidated_weather,
          cityname: res.data.title
        });
        console.log(this.state.detailedweather);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <ConsolidatedWeather obj={this.state.detailedweather[0]} city={this} />
      </div>
    );
  }
}
