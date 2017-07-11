import React from 'react';
import axios from 'axios';

export default class NewFund extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      email: '',
      phoneNumber: '',
      suppliesOrFunds: 'lost',
      title: '',
      description: '',
      imageStr: '',
      location: ''
    }
  }

  handleSubmit(e) {
    // e.preventDefault();
    // var email = document.getElementsByName('email')[0].value
    // var phoneNumber = document.getElementsByName('phoneNumber')[0].value
    // var location = document.getElementsByName('location')[0].value
    // var suppliesOrFunds = document.getElementsByName('suppliesOrFunds')[0].value
    // var title = document.getElementsByName('title')[0].value
    // var description = document.getElementsByName('description')[0].value
    // this.setState({
    //   email,
    //   phoneNumber,
    //   location,
    //   suppliesOrFunds,
    //   title,
    //   description
    // }, function() {
    //   this.submitData()
    // })
  }

  submitData() {
    // alert("Please wait, uploading your post")
    // axios.post('/submitnewentry', JSON.stringify({
    //   email: this.state.email,
    //   phoneNumber: this.state.phoneNumber,
    //   suppliesOrFunds: this.state.suppliesOrFunds,
    //   imageStr: this.state.imageStr,
    //   location: this.state.location,
    //   title: this.state.title,
    //   description: this.state.description
    // }))
    // .then(function(response) {
    //   alert("Your new entry has been submitted")
    // })
    // .catch(function(err) {
    //   alert("Your image is too big, please resize image and try again")
    // })
  }

  suppliesClick() {
    $(".found").removeClass("active")
    $(".lost").addClass("active")
    this.setState({lostOrFound: "lost"})
  }

  fundsClick() {
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Email: </label>
          <br />

          <input type="email" name="email" required/>
          <br />

          <label>Phone Number (optional): </label>
          <br />

          <input type="text" name="phoneNumber" />
          <br />

          <label>Image:</label>
          <br />

          <input type="file" onChange={() => this.previewFile()} required></input>
          <img src="" height="200" alt="Image preview..." id="uploadedimg"/>
          <br />

          <label>Title:</label>
          <br />

          <input type="text" name="title" placeholder="Ex: Fluffy's Medical Expenses" required/>
          <br />

          <label>Location:</label>
          <br />

          <input type="text" name="location" placeholder="Ex: San Francisco, CA" required/>
          <br />



          <label>Description:</label>
          <br />

          <textarea rows="4" cols="50" name="description" placeholder="Ex: Fluffy is sick." required>
          </textarea>
          <br/>
          <button type="submit" className="lostandfoundbutton">Submit</button>
        </form>


      </div>
    )
  }

}