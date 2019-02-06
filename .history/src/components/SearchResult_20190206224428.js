import React, { Component } from "react";

export default class SearchResult extends Component {
  constructor() {
    super();

    this.state = {
      search: ""
    };
  }
  componentDidMount() {
    this.setState({ search: this.props.match.params.keyword });

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
