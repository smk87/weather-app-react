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
              className=" col-md-11 btn btn-primary"
              value="Find"
            />
          </form>
        </div>
      </div>
    );
  }
}
