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
        <div className="container">
          <form onSubmit={this.onSubmit} action="#" className="form-inline">
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

          <div className="row">
            <div className="col col-md-3">
              <div class="card">
                <p class="card-body">
                  <Weather id="2344116" />
                </p>
              </div>
            </div>
            <div className="col col-md-3">
              <div class="card h-100">
                <p class="card-body">
                  This card on the left of the other two cards, with a fixed
                  height and scrolling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
