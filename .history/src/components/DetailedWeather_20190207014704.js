import React, { Component } from "react";
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
        // console.log(this.state.cityname);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Weather Forecasts Of {this.state.cityname} In Next 6 Days</h1>
        {this.state.detailedweather.map(c => (
          <ConsolidatedWeather
            temp={c.the_temp}
            city={this.state.cityname}
            maxtemp={c.max_temp}
            mintemp={c.min_temp}
            date={c.applicable_date}
            status={c.weather_state_name}
            humidity={c.humidity}
          />
        ))}
      </div>
    );
  }
}
