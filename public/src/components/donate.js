import React from 'react';
import axios from 'axios';
import FundraiserEntry from './fundraiserentry';

export default class Donate extends React.Component {
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
    axios.get('/getallfundraiserentries')
    .then(function(entries) {
      //console.log(entries)

      self.setState({entries: entries.data})
    })
    .catch(function(err) {
      console.log("err", err)
    })

  }

  renderEntries() {
    if (this.state.entries.length>0) {
      return (
        <div>
        {this.state.entries.map(entry => <FundraiserEntry entry={entry} key = {entry._id}/>)}
        </div>
      )
    } else {
      return (
        <div><i className="fa fa-paw fa-spin fa-5x"></i> Loading..</div>
      )
    }
  }

	render () {
		return (
			<div className="page">
        <h1>Donations</h1>
        <a href="/newfund"><button className="lostandfoundbutton">New Fundraiser</button></a>
        {this.renderEntries()}
      </div>

		)
	}
}