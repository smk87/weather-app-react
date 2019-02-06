import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      result: ""
    };
  }

  refreshPage = () => {
    window.location.reload();
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.setState({
      search: this.props.match.params.keyword
    });

    let url = `/weather/weather.php?command=search&keyword=${
      this.props.match.params.keyword
    }`;
    console.log(url);
    axios
      .get(url) //Used proxy to connect with local wamp server
      .then(res => {
        console.log(res.data);
        this.setState({ result: res.data });
      })
      .catch(err => console.log(err));
    console.log(this.state);
  }

  render() {
    const newTo = {
      pathname: `/search/${this.state.search}`
    };

    return (
      <div className="container">
        {this.state.result ? <h1>Hello</h1> : <h1>Not Found</h1>}
        <form className="form-inline">
          <input
            type="text"
            name="search"
            className="form-control col-md-11"
            placeholder="Find your location..."
            value={this.state.search}
            onChange={this.onChange}
          />

          <Link to={newTo}>
            <button
              type="button"
              onClick={this.refreshPage}
              className="btn btn-primary ml-3"
            >
              Find
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
