import React from 'react';

export default class ShelterPetsInfo extends React.Component {

  getBreed() {
    var petBreed=this.props.petInfo.breeds.breed
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
    var petInfo = this.props.petInfo
    if (this.props.petInfo) {
      return (
        <div className="shelterPetInfo">
          <div className="shelterPetPicture">
            <img src={petInfo.media.photos.photo[3].$t} />
          </div>
          <div className="petInfo">
            <h2>{petInfo.name.$t}</h2>
            <p>Animal: {petInfo.animal.$t}</p>
            <p>Breed: {this.getBreed()}</p>
            <p>Gender: {petInfo.sex.$t}</p>
            <p></p>
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}