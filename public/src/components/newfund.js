import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';

const customStyles = {
	content : {
		top: '25%',
		left: '25%',
		width: '50%',
		height: '50%'
	}
};

export default class NewFund extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      email: '',
      phoneNumber: '',
      suppliesOrFunds: 'supplies',
      title: '',
      description: '',
      imageStr: '',
      location: '',
      venmo: '',
      paypal: '',
      goal: '',
      donationsReceived: 0,
      showModal: false
    }
  }

  submitData(e) {
	  e.preventDefault();
    let self = this;
    axios.post('/submitnewfundraiser', JSON.stringify({
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      suppliesOrFunds: this.state.suppliesOrFunds,
      title: this.state.title,
      description: this.state.description,
      imageStr: this.state.imageStr,
      location: this.state.location,
      venmo: this.state.venmo,
      paypal: this.state.paypal,
      goal: this.state.goal,
      donationsReceived: this.state.donationsReceived
    }))
    .then(function(response) {
	    self.handleOpenModal.call(self)
    })
    .catch(function(err) {
      console.log("Your image is too big, please resize image and try again")
    })
  }

  suppliesClick() {
    $(".found").removeClass("active")
    $(".lost").addClass("active")
    this.setState({suppliesOrFunds: "supplies"})
  }

  fundsClick() {
    $(".found").addClass("active")
    $(".lost").removeClass("active")
    this.setState({suppliesOrFunds: "funds"})

  }

  previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    var self = this
    reader.addEventListener("load", function () {
      preview.src = reader.result;
      self.setState({imageStr: reader.result})

    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }

  }
	
	handleInputChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({[name]: value})
	}
	
	handleOpenModal () {
		this.setState({ showModal: true });
	}
	
	handleCloseModal () {
		this.setState({ showModal: false });
	}
	
  render() {
    return (
      <div className="page newentry">
        <h1>New Fundraiser</h1>

        <div className="entrytype">
          <div className="lost active supplies" onClick={this.suppliesClick.bind(this)}>

          <i className="fa fa-gift fa-5x" aria-hidden="true"></i><br/>
          <h2>
          Need Supplies
          </h2>
          </div>
          <div className="found funds" onClick={this.fundsClick.bind(this)}>

          <i className="fa fa-money fa-5x" aria-hidden="true"></i><br/>
          <h2>
          Need<br/>Funds
          </h2>
          </div>
        </div>

        <br/>
        <form onSubmit={this.submitData.bind(this)}>
          <label>Email: </label>
          <br />

          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange.bind(this)} required/>
          <br />

          <label>Phone Number (optional): </label>
          <br />

          <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange.bind(this)} />
          <br />

          <label>Image (optional):</label>
          <br />

          <input type="file" onChange={() => this.previewFile()}></input>
          <img src="" height="200" alt="Image preview..." id="uploadedimg"/>
          <br />

          <label>Title:</label>
          <br />

          <input type="text" name="title" placeholder="Ex: Fluffy's Medical Expenses" value={this.state.title} onChange={this.handleInputChange.bind(this)} required/>
          <br />

          <label>Location for supply drop off (optional):</label>
          <br />

          <input type="text" name="location" placeholder="Ex: 123 Furry Friends St, San Francisco, CA" value={this.state.location} onChange={this.handleInputChange.bind(this)} />
          <br />

          <label>Email accociated with your PayPal (optional):</label>
          <br />

          <input type="email" name="paypal" value={this.state.paypal} onChange={this.handleInputChange.bind(this)} />
          <br />

          <label>Venmo Username (optional):</label>
          <br />

          <input type="text" name="venmo" value={this.state.venmo} onChange={this.handleInputChange.bind(this)} />
          <br />

          <label>Goal (optional):</label>
          <br />

          <input type="number" name="goal" placeholder="Ex: $1000" value={this.state.goal} onChange={this.handleInputChange.bind(this)} />
          <br />

          <label>Description:</label>
          <br />

          <textarea rows="4" cols="50" name="description" placeholder="Ex: Fluffy is sick :(. Need money for his medical bill." value={this.state.description} onChange={this.handleInputChange.bind(this)} required>
          </textarea>
          <br/>
          <button type="submit" className="lostandfoundbutton">Submit</button>
        </form>
  
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Success"
          style={customStyles}
        >
          <button onClick={this.handleCloseModal.bind(this)}>Close</button>
          <br/>
          <label>Your entry has been submitted.</label>
  
        </ReactModal>

      </div>
    )
  }

}