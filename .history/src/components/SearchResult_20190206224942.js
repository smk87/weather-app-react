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
      });
    console.log(this.state.result);
  }
  render() {
    return (
      <div>
        <h1>Hello Search {this.props.match.params.keyword}</h1>
      </div>
    );
  }
}
