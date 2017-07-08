import React from 'react';

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
      description: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var email = document.getElementsByName('email')[0].value
    var phoneNumber = document.getElementsByName('phoneNumber')[0].value
    var location = document.getElementsByName('location')[0].value
    var dateLostOrFound = document.getElementsByName('dateLostOrFound')[0].value
    var animal = document.getElementsByName('animal')[0].value
    var breed = document.getElementsByName('breed')[0].value
    var description = document.getElementsByName('description')[0].value
    this.setState({
      email,
      phoneNumber,
      location,
      dateLostOrFound,
      animal,
      breed,
      description
    }, function() {
      this.postData()
    })
  }

  postData() {
    console.log(this.state)
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

          <label>Location:</label>
          <br />

          <input type="text" name="location" placeholder="Ex: San Francisco, CA" required/>
          <br />

          <label>Pet Name:</label>
          <br />

          <input type="text" name="petName" placeholder="Ex: Fluffy" required/>
          <br />

          <label>Date Lost or Found:</label>
          <br />

          <input type="date" name="dateLostOrFound" required/>
          <br />

          <label>Animal Type:</label>
          <br />

          <input type="text" name="animal" placeholder="Ex: Dog" required/>
          <br />

          <label>Breed:</label>
          <br />

          <input type="text" name="breed" placeholder="Ex: Husky" required/>
          <br />

          <label>Description:</label>
          <br />

          <textarea rows="4" cols="50" name="description" placeholder="Ex: Grey and White. 60 pounds. Last seen at the park chasing a squirrel." required>
          </textarea>
          <br/>
          <button type="submit">Submit</button>
        </form>


      </div>
    )
  }

}