import React, { Component } from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      search: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div class="container">
          <form onSubmit={this.onSubmit} action="#" class="form-inline">
            <input
              type="text"
              name="search"
              className="form-control col-md-10"
              placeholder="Find your location..."
              value={this.state.search}
              onChange={this.onChange}
            />
            <input
              type="submit"
              className="ml-2 btn btn-primary"
              value="Find"
            />
          </form>
          <Link to="/weather/:woeid">
            <Weather />
          </Link>
        </div>
      </div>
    );
  }
}
