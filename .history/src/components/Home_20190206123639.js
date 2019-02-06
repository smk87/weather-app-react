import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <form action="#" class="form-inline">
            <input
              type="text"
              className="form-control col-md-10"
              placeholder="Find your location..."
            />
            <input
              type="submit"
              className="ml-2 btn btn-primary"
              value="Find"
            />

            <div className="card" style="{width: 18rem}" />
          </form>
        </div>
      </div>
    );
  }
}
