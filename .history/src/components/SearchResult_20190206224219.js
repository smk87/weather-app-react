import React, { Component } from 'react'

export default class SearchResult extends Component {
    constructor(){
        super();

        this.state={
            search=""
        }
    }
    componentDidMount(){
        this.setState({search:this.props.match.params.keyword})

    }
    render() {
    return (
      <div>
        <H
      </div>
    )
  }
}
