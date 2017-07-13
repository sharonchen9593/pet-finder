import React from 'react';

export default class FundraiserEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      email: '',
      phoneNumber: '',
      suppliesOrFunds: '',
      title: '',
      description: '',
      imageStr: '',
      location: '',
      venmo: '',
      paypal: '',
      goal: ''
    }
  }

  getGoal(goal) {
    console.log("inside getGoal", this.state)
    //console.log("state", this.state)
    if (this.props.entry.suppliesOrFunds==="supplies") {
      return goal + " supplies"
    } else if (this.props.entry.suppliesOrFunds==="funds") {
      return "$" + goal
    }
  }

  componentDidMount() {
    var entry = this.props.entry
    var self = this;
    this.setState({
      email: entry.email,
      phoneNumber: entry.phoneNumber,
      suppliesOrFunds: entry.suppliesOrFunds,
      title: entry.title,
      description: entry.description,
      imageStr: entry.imageStr,
      location: entry.location,
      venmo: entry.venmo,
      paypal: entry.paypal,
      goal: this.getGoal(entry.goal)
    })
    console.log("props", this.props)
  }

  render() {
    return (
      <div className="entry">
        <div>
          <img src={this.state.imageStr} className="entryImg"/>
        </div>
        <div className="entryData">
          <h2>{this.state.title}</h2>
          <p>Need: {this.state.suppliesOrFunds}</p>
          <p>Goal: {this.state.goal}</p>
          <p>Email: {this.state.email}</p>
          <p>Phone Number: {this.state.phoneNumber}</p>
          <p>Location: {this.state.location}</p>
          <p>Paypal info: {this.state.paypal}</p>
          <p>Venmo info: {this.state.venmo}</p>
          <p>Description: {this.state.description}</p>
          <div>

          </div>
        </div>


      </div>
    )
  }
}