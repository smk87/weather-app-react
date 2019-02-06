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
    this.setState({ id: this.props.id });

    const url = `weather/weather.php?command=location&woeid=${this.props.id}`;
    console.log(url);
    axios
      .get(url) //Used proxy to connect with local wamp server
      .then(res => {
        console.log(res.data);
        this.setState({
          cityname: res.data.title,
          temp: res.data.consolidated_weather[0].the_temp.toPrecision(2),
          maxtemp: res.data.consolidated_weather[0].max_temp,
          mintemp: res.data.consolidated_weather[0].min_temp
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="mt-5 mr-2 h-50 w-25 card">
        <div>
          <img
            src="http://3.bp.blogspot.com/-9j20aNDWQFk/UQgZBMrATQI/AAAAAAAAlXM/b2d4T6ZvFbo/s1600/598.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body">
          <div className="card-text">
            <h5>City: </h5> {this.state.cityname}
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
          <icon />
        </div>
      </div>
    );
  }
}
