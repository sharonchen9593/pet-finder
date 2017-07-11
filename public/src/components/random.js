import React from 'react';
import axios from 'axios';

export default class Random extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      name: '',
      img: '',
      animal: '',
      breed: '',
      gender: '',
      description: '',
      size: '',
      other: '',
      address: '',
      email: '',
      fax: '',
      phone: '',
      shelterId: '',
      shelterName: ''
    }
  }

  componentDidMount() {
    var self = this;
    axios.get("https://cors-anywhere.herokuapp.com/https://api.petfinder.com/pet.getRandom?format=json&key=e8bc141aa160a7c51a8460be64c1a929&output=full")
    .then(function(res) {
      console.log(res)
      self.getPetInfo(res.data.petfinder.pet)
    })
    .catch(function(err) {
      console.log("err", err)
      alert("An error has occurred! Please refresh page")
    })
  }

  getBreed(petInfo) {
    var petBreed=petInfo.breeds.breed
    var breedStr = ""
    if (Array.isArray(petBreed)) {
      var breedArr = []
      petBreed.forEach(function(breed) {
        breedArr.push(breed.$t)
      })
      breedStr = breedArr.join(', ')
    } else if (typeof petBreed === "object") {
      breedStr += petBreed.$t
    }
    return breedStr
  }

  getOther(pet) {
    var other = ''
    if (Array.isArray(pet.options.option)) {
      var petOptions = []
      pet.options.option.forEach(function(item) {
        petOptions.push(item.$t)
      })
      other = petOptions.join(', ')
    } else if (typeof pet.options.option === 'object') {
      other = pet.options.option.$t
    }
    return other;
  }

  getPetInfo(pet) {
    var self = this
    this.setState({
      name: pet.name.$t,
      img: this.getPhoto(pet),
      animal: pet.animal.$t,
      breed: this.getBreed(pet),
      gender: pet.sex.$t,
      description: pet.description.$t,
      size: pet.size.$t,
      other: this.getOther(pet),
      address: pet.contact.address1.$t + ', ' + pet.contact.city.$t + ', ' + pet.contact.state.$t + ', ' + pet.contact.zip.$t,
      email: pet.contact.email.$t,
      fax: pet.contact.fax.$t,
      phone: pet.contact.phone.$t,
      shelterId: pet.shelterId.$t
    }, this.getShelter.bind(this))
  }

  getPhoto(pet) {
    if (pet.media.photos.photo) {
      return pet.media.photos.photo[2].$t
    }
    return '';
  }

  getShelter() {
    var self = this;
    axios.get("https://cors-anywhere.herokuapp.com/https://api.petfinder.com/shelter.get?format=json&key=e8bc141aa160a7c51a8460be64c1a929&id="+ this.state.shelterId)
    .then(function(res) {
      console.log("shelterinfo", res)
      var shelterName=res.data.petfinder.shelter.name.$t
      self.setState({shelterName})
    })
    .catch(function(err) {
      console.log("err", err)
    })
  }

  render () {
    return (
      <div className="page random">
        <div className="randomInfo">
        <h2 className="meetRandom">Meet {this.state.name}!</h2>
        <div className="randomImg">
          <img src={this.state.img}/>
        </div>
        <div className="randomInfoText">
          <p>Animal Type: {this.state.animal}</p>
          <p>Breed: {this.state.breed}</p>
          <p>Gender: {this.state.gender}</p>
          <p>Description: {this.state.description}</p>
          <p>Size: {this.state.size}</p>
          <p>Other: {this.state.other}</p>
        </div>
        <h1>Interested?</h1>
        <div className="randomInfoText">
          <h2>Contact Info</h2>
          <p>Shelter: {this.state.shelterName}</p>
          <p>Phone: {this.state.phone}</p>
          <p>Email: {this.state.email}</p>
          <p>Fax: {this.state.fax}</p>
          <p>Address: {this.state.address}</p>
        </div>
        </div>
      </div>
    )
  }
}