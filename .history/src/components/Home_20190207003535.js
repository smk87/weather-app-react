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
  onSubmit = e => {
    <Link to="/" />;
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const newTo = {
      pathname: `/search/${this.state.search}`
    };
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onSubmit} className="form-inline">
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

          <form className="form-inline">
            <Weather id="2344116" />
            <Weather id="638242" />
            <Weather id="44418" />
          </form>
          <form className="form-inline">
            <Weather id="565346" />
            <Weather id="560743" />
            <Weather id="9807" />
          </form>
        </div>
      </div>
    );
  }
}
