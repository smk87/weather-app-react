import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Weather extends Component {
  constructor() {
    super();

    this.state = {
      cityname: "",
      id: "",
      temp: "",
      maxtemp: "",
      mintemp: "",
      logo: ""
    };
  }

  componentWillMount() {
    this.setState({ id: this.props.id });

    const url = `https://www.metaweather.com/api/location/${this.props.id}`;
    // console.log(url);
    axios
      .get(url) //Used proxy to connect with local wamp server
      .then(res => {
        // console.log(res.data);

        switch (res.data.consolidated_weather[0].weather_state_name) {
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
        this.setState({
          cityname: res.data.title,
          temp: res.data.consolidated_weather[0].the_temp.toPrecision(3),
          maxtemp: res.data.consolidated_weather[0].max_temp.toPrecision(3),
          mintemp: res.data.consolidated_weather[0].min_temp.toPrecision(3)
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const newTo = {
      pathname: `/weather/${this.state.id}`
    };
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
          <Link to={newTo}>
            <button type="button" className="btn btn-success">
              View Details
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
