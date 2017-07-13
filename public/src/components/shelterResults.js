import React from 'react';
import axios from 'axios';
//import ShelterPetsInfo from './shelterpetsinfo';

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
      this.setState({updated: true})
    }
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

  getPhoto(petInfo) {
    if (petInfo.media.photos.photo) {
      return petInfo.media.photos.photo[3].$t
    }
    return '';
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

  render() {
    var shelter = this.props.shelterData;
    var pets = this.props.shelterPets;
    if (!this.props.shelterData || !this.props.shelterPets) {
      return (
        <div>
          <h1>Please click on an animal shelter to see the animal shelter information and their pet list.</h1>
        </div>
      )
    }
    else if (this.props.shelterData && this.props.shelterPets) {
      return (
        <div className = "shelterResults">
          <h2 className="shelterHeading">{shelter.name.$t}</h2>
          <p>Address: {shelter.name.$t}, {shelter.city.$t}, {shelter.state.$t}, {shelter.zip.$t}</p>
          <p>Phone Number: {shelter.phone.$t}</p>
          <p>Email: {shelter.email.$t}</p>
          <h2 className="shelterHeading">Available Animals:</h2>
          <br/>
          {pets.map(petInfo=>

            <div className="shelterPetInfo" key={petInfo.id.$t}>
              <div className="shelterPetPicture">
                <img src={this.getPhoto(petInfo)} />
              </div>
              <div className="petInfo">
                <h2>{petInfo.name.$t}</h2>
                <p>Animal: {petInfo.animal.$t}</p>
                <p>Breed: {this.getBreed(petInfo)}</p>
                <p>Size: {petInfo.size.$t}</p>
                <p>Other: {this.getOther(petInfo)}</p>
                <p>Id: {petInfo.shelterPetId.$t}</p>
              </div>
              <div className="shelterPetDescription"><p>Description: {petInfo.description.$t}</p></div>
            </div>
          )}

        </div>
      )
    }
  }
}
