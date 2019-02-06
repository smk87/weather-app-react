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
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
