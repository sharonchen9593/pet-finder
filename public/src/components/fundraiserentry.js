import React from 'react';
import ProgressBar from 'react-progress-bar-component';
import ReactModal from 'react-modal';
import axios from 'axios';

const customStyles = {
  content : {
    top: '25%',
    left: '25%',
    width: '50%',
    height: '50%'
  }
};

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
      goal: '',
      donationsReceived: 0,
      amountDonated: 0,
      showModal: false,
      id: ''
    }
  }

  getGoal(goal) {
    if (this.props.entry.suppliesOrFunds==="supplies") {
      return goal + " items"
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
      goal: this.getGoal(entry.goal),
      donationsReceived: entry.donationsReceived,
      id: entry._id
    })
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  renderDonationComponent () {
    if (this.state.suppliesOrFunds==="funds") {
      return (
        <div>
        <p>Please send donations to:</p>
        <p>Paypal email: {this.state.paypal}</p>
        <p>or</p>
        <p>Venmo username: {this.state.venmo}</p>
        </div>
      )
    }
    if (this.state.suppliesOrFunds==="supplies") {
      return (
        <div>
          <p>Please send donations to {this.state.location}.</p>
        </div>


      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var amountDonated = document.getElementsByName('amountDonated')[0].value
    amountDonated = Number(amountDonated)+Number(this.state.donationsReceived)
    this.setState({
      amountDonated
    }, function() {
      this.submitData(amountDonated)
    })
  }

  submitData(amountDonated) {
    var self = this;
    this.setState({donationsReceived:amountDonated})
    axios.post('/newdonation', JSON.stringify({
      amountDonated: amountDonated,
      _id: this.state.id

    }))
    .then(function(response) {
      alert("Thank you for your support!")
      console.log("amountdonated", amountDonated)
      self.setState({donationsReceived:amountDonated})
      self.handleCloseModal()

    })
    .catch(function(err) {
      alert("Sorry, an error has occurred. Please try again.")
    })
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
          <p>Paypal email: {this.state.paypal}</p>
          <p>Venmo username: {this.state.venmo}</p>
          <p>Description: {this.state.description}</p>
          <div>
            Progress:
            <ProgressBar min={0} max={Number(this.props.entry.goal)} current={this.state.donationsReceived} />
          </div>
          <br/>
          <button
          className="lostandfoundbutton"
          onClick={this.handleOpenModal.bind(this)}
          >
          Donate</button>
          <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Donate"
          style={customStyles}
        >
          <button onClick={this.handleCloseModal.bind(this)}>Close</button>
          <div>
		        {this.renderDonationComponent()}
          </div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Please submit amount donated so we can keep track </label>
            <br />
    
            <input type="number" name="amountDonated" required/>
            <br />
            <button type="submit" className="lostandfoundbutton">Submit Donation</button>
          </form>
        </ReactModal>
        </div>


      </div>
    )
  }
}