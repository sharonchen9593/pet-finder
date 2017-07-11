import React from 'react';
import axios from 'axios';
import LostAndFoundEntry from './lostandfoundentry';

export default class LostAndFound extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: []
    }
  }
  componentDidMount() {
    this.getEntries()
  }

  getEntries() {
    var self = this
    axios.get('/getallentries')
    .then(function(entries) {
      self.setState({entries: entries.data})
    })
    .catch(function(err) {
      console.log("err")
    })

  }

  renderEntries() {
    if (this.state.entries.length>0) {
      return (
        <div>
        {this.state.entries.map(entry => <LostAndFoundEntry entry={entry} key = {entry._id}/>)}
        </div>
      )
    } else {
      return (
        <div><i className="fa fa-paw fa-spin fa-5x"></i> Loading..</div>
      )
    }
  }

	render() {
		return (
			<div className="page">
  			<h1 className="lostandFoundHeader">Lost and Found</h1>
        <a href="/newentry"><button className="lostandfoundbutton">New Entry</button></a>
        {this.renderEntries()}
      </div>
    )
  }

}
