import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class SearchResult extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      result: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentWillMount() {
    this.setState({ search: this.props.match.params.keyword });

    let url = `/weather/weather.php?command=search&keyword=${
      this.props.match.params.keyword
    }`;
    console.log(url);
    axios
      .get(url) //Used proxy to connect with local wamp server
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    console.log(this.state);
  }
  render() {
    const newTo = {
      pathname: `/search/${this.state.search}`
    };

    return (
      <div className="container">
        <h1>Hello Search {this.state.search}</h1>
        <form onSubmit={this.onSubmit} action="#" className="form-inline">
          <input
            type="text"
            name="search"
            className="form-control col-md-10"
            placeholder="Find your location..."
            value={this.state.search}
            onChange={this.onChange}
          />

          <a href="">
            <button type="button" className="btn btn-primary">
              Find
            </button>
          </a>
        </form>
      </div>
    );
  }
}
