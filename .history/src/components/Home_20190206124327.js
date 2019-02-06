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

            <div className="mt-5 h-100 card">
              <img
                src="http://3.bp.blogspot.com/-9j20aNDWQFk/UQgZBMrATQI/AAAAAAAAlXM/b2d4T6ZvFbo/s1600/598.jpg"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
