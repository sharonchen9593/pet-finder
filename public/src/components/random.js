import React from 'react';
import axios from 'axios';

export default class Random extends React.Component {
  componentDidMount() {
    console.log("random")
  }
  render () {
    return (
      <div className="page">Random</div>
    )
  }
}