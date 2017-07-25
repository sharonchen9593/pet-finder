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

export default class NewEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      email: '',
      phoneNumber: '',
      lostOrFound: 'lost',
      dateLostOrFound:'',
      imageStr: '',
      location: '',
      animal: '',
      breed: '',
      description: '',
      petName: ''
    }
    //this.handleInputChange = this.handleInputChange.bind(this)
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   var email = document.getElementsByName('email')[0].value
  //   var phoneNumber = document.getElementsByName('phoneNumber')[0].value
  //   var location = document.getElementsByName('location')[0].value
  //   var petName = document.getElementsByName('petName')[0].value
  //   var dateLostOrFound = document.getElementsByName('dateLostOrFound')[0].value
  //   var animal = document.getElementsByName('animal')[0].value
  //   var breed = document.getElementsByName('breed')[0].value
  //   var description = document.getElementsByName('description')[0].value
  //   this.setState({
  //     email,
  //     phoneNumber,
  //     location,
  //     petName,
  //     dateLostOrFound,
  //     animal,
  //     breed,
  //     description
  //   }, function() {
  //     this.submitData()
  //   })
  // }

  submitData(e) {
	  e.preventDefault();
    console.log("Please wait, uploading your post")
    let self = this;
    axios.post('/submitnewentry', JSON.stringify({
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      lostOrFound: this.state.lostOrFound,
      imageStr: this.state.imageStr,
      location: this.state.location,
      petName: this.state.petName,
      dateLostOrFound: this.state.dateLostOrFound,
      animal: this.state.animal,
      breed: this.state.breed,
      description: this.state.description,
      showModal: false
    }))
    .then(function(response) {
      self.handleOpenModal.call(self)
    })
    .catch(function(err) {
      console.log("Your image is too big, please resize image and try again")
    })
  }

  lostClick() {
    $(".found").removeClass("active")
    $(".lost").addClass("active")
    this.setState({lostOrFound: "lost"})
  }

  foundClick() {
    $(".found").addClass("active")
    $(".lost").removeClass("active")
    this.setState({lostOrFound: "found"})

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
        <h1>New Lost and Found Entry</h1>

        <div className="entrytype">
        <div className="lost active" onClick={this.lostClick.bind(this)}>

        <i className="fa fa-search fa-5x" aria-hidden="true"></i><br/>
        <h2>
        Lost
        </h2>
        </div>
        <div className="found" onClick={this.foundClick.bind(this)}>

        <i className="fa fa-paw fa-5x" aria-hidden="true"></i><br/>
        <h2>
        Found
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

          <input type="text" name="phoneNumber" onChange={this.handleInputChange.bind(this)} />
          <br />

          <label>Image:</label>
          <br />

          <input type="file" onChange={() => this.previewFile()} required></input>
          <img src="" height="200" alt="Image preview..." id="uploadedimg"/>
          <br />

          <label>Location:</label>
          <br />

          <input type="text" name="location" placeholder="Ex: San Francisco, CA" value={this.state.location} onChange={this.handleInputChange.bind(this)} required/>
          <br />

          <label>Pet Name:</label>
          <br />

          <input type="text" name="petName" placeholder="Ex: Fluffy" value={this.state.petName} onChange={this.handleInputChange.bind(this)} required/>
          <br />

          <label>Date Lost or Found:</label>
          <br />

          <input type="date" name="dateLostOrFound" value={this.state.dateLostOrFound} onChange={this.handleInputChange.bind(this)} required/>
          <br />

          <label>Animal Type:</label>
          <br />

          <input type="text" name="animal" placeholder="Ex: Dog" value={this.state.animal} onChange={this.handleInputChange.bind(this)} required/>
          <br />

          <label>Breed:</label>
          <br />

          <input type="text" name="breed" placeholder="Ex: Husky" value={this.state.breed} onChange={this.handleInputChange.bind(this)} required/>
          <br />

          <label>Description:</label>
          <br />

          <textarea rows="4" cols="50" name="description" placeholder="Ex: Grey and White. 60 pounds. Last seen at the park chasing a squirrel." value={this.state.description} onChange={this.handleInputChange.bind(this)} required>
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