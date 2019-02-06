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
              className="form-control"
              placeholder="Find your location..."
            />
            <input type="submit" value="Find" />
          </form>
        </div>
      </div>
    );
  }
}
