import React, { Component } from "react";

export default class ConsolidatedWeather extends Component {
  constructor() {
    super();

    this.state = {
      cityname: "",
      temp: "",
      maxtemp: "",
      mintemp: "",
      logo: "",
      date: "",
      status: ""
    };
  }

  componentWillMount() {
    console.log(this.props);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let d = new Date(this.props.date);
    let dayName = days[d.getDay()];

    this.setState({
      cityname: this.props.city,
      temp: this.props.temp.toPrecision(3),
      maxtemp: this.props.maxtemp.toPrecision(3),
      mintemp: this.props.mintemp.toPrecision(3),
      date: days[d.getDay()]
    });

    switch (this.props.status.weather_state_name) {
      case "Snow":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/sn.svg"
        });
        break;
      case "Sleet":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/sl.svg"
        });
        break;
      case "Hail":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/h.svg"
        });
        break;
      case "Thunderstorm":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/t.svg"
        });
        break;
      case "Heavy Rain":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/hr.svg"
        });
        break;
      case "Light Rain":
        this.setState({
          logo: `https://www.metaweather.com/static/img/weather/lr.svg`
        });
        break;
      case "Showers":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/s.svg"
        });
        break;
      case "Heavy Cloud":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/hc.svg"
        });
        break;
      case "Light Cloud":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/lc.svg"
        });
        break;
      case "Clear":
        this.setState({
          logo: "https://www.metaweather.com/static/img/weather/c.svg"
        });
        break;
    }
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
