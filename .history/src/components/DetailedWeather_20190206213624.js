import React, { Component } from "react";
import Weather from "./Weather";
import axios from "axios";
import ConsolidatedWeather from "./ConsolidatedWeather";

export default class DetailedWeather extends Component {
  constructor() {
    super();

    this.state = {
      detailedweather: [],
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
        const temp = this.state.detailedweather.map(c => {
          return c.the_temp;
        });
        console.log(temp, this.state.cityname);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <ConsolidatedWeather temp={this.state.detailedweather[0]} />
      </div>
    );
  }
}
