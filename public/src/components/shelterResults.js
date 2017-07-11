import React from 'react';
import axios from 'axios';
import ShelterPetsInfo from './shelterpetsinfo';

export default class ShelterResults extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      pets:[],
      updated:false
    }
  }

  componentDidUpdate() {
    if (!this.state.updated && this.props.shelterData && this.props.shelterData.id) {
      this.setState({updated: true}/*, this.getPetInfo.bind(this)*/)
    }
  }

  // getPetInfo() {
  //     console.log(this.props.shelterData.id.$t)
  //     var self = this;
  //     var shelterId = this.props.shelterData.id.$t
  //     axios.get('https://cors-anywhere.herokuapp.com/https://api.petfinder.com/shelter.getPets?format=json&key=e8bc141aa160a7c51a8460be64c1a929&count=100&id='+shelterId)
  //     .then(function(res) {
  //       console.log("res",res)
  //       var pets = res.data.petfinder.pets.pet
  //       self.setState({pets:pets})

  //     })
  //     .catch(function(err) {
  //       console.log("err", err)
  //     })

  // }

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


  render() {
    var shelter = this.props.shelterData;
    var pets = this.props.shelterPets;
    if (!this.props.shelterData || !this.props.shelterPets) {
      return (
        <div>
          <h1>Please click on an animal shelter to see Animal Shelter information.</h1>
        </div>
      )
    }
    else if (this.props.shelterData && this.props.shelterPets) {
      return (
        <div className = "shelterResults">
          <h2>{shelter.name.$t}</h2>
          <p>Address: {shelter.name.$t}, {shelter.city.$t}, {shelter.state.$t}, {shelter.zip.$t}</p>
          <p>Phone Number: {shelter.phone.$t}</p>
          <p>Email: {shelter.email.$t}</p>
          <h2>Available Animals:</h2>
          <p><a href={"https://www.petfinder.com/pet-search?shelterid=" + shelter.id.$t} target="_blank">Click Here</a> for more details about each animal</p>
          <br/>
          {pets.map(petInfo=>

            <div className="shelterPetInfo" key={petInfo.id.$t}>
              <div className="shelterPetPicture">
                <img src={petInfo.media.photos.photo[3].$t} />
              </div>
              <div className="petInfo">
                <h2>{petInfo.name.$t}</h2>
                <p>Animal: {petInfo.animal.$t}</p>
                <p>Breed: {this.getBreed(petInfo)}</p>
                <p>Gender: {petInfo.sex.$t}</p>
                <p></p>
              </div>
            </div>
          )}

        </div>
      )
    }
  }
}
          // {this.state.pets.map(petInfo =>
          //   <ShelterPetsInfo petInfo={petInfo} key={petInfo.id.$t}/>
          // )}
          // <ShelterPetsInfo petInfo={this.state.pets}/>