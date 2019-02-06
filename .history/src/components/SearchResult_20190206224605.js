import React, { Component } from "react";
import axios from "axios";

export default class SearchResult extends Component {
  constructor() {
    super();

    this.state = {
      search: ""
    };
  }
  componentDidMount() {
    this.setState({ search: this.props.match.params.keyword });

    const url = `weather/weather.php?command=location&woeid=${this.props.id}`;
    // console.log(url);
    axios.get(url); //Used proxy to connect with local wamp server
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>Hello Search {this.props.match.params.keyword}</h1>
      </div>
    );
  }
}
