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
      day: ""
    };
  }

  componentWillMount() {
    console.log(this.props.obj);
    this.setState({
      cityname: this.props.city,
      temp: this.props.obj.the_temp,
      maxtemp: this.props.obj.max_temp,
      mintemp: this.props.obj.min_temp,
      logo: "",
      day: ""
    });
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
