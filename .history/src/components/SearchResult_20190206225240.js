import React, { Component } from "react";
import axios from "axios";

export default class SearchResult extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      result: ""
    };
  }
  componentDidMount() {
    this.setState({ search: this.props.match.params.keyword });

    const url = `weather/weather.php?command=search&keyword=${
      this.props.match.params.keyword
    }`;
    console.log(url);
    axios
      .get(url) //Used proxy to connect with local wamp server
      .then(res => {
        this.setState({ result: res });
      })
      .catch(err => console.log(err));
    console.log(this.state.result);
  }
  render() {
    const newTo = {
      pathname: `/search/${this.state.search}`
    };
    return (
      <div className="container">
        <h1>Hello Search {this.props.match.params.keyword}</h1>
        <form onSubmit={this.onSubmit} action="#" className="form-inline">
          <input
            type="text"
            name="search"
            className="form-control col-md-10"
            placeholder="Find your location..."
            value={this.state.search}
            onChange={this.onChange}
          />

          <Link to={newTo}>
            <input
              type="submit"
              className="ml-2 btn btn-primary"
              value="Find"
            />
          </Link>
        </form>
      </div>
    );
  }
}
