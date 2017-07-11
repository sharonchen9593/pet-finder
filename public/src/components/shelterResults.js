import React from 'react';

export default class ShelterResults extends React.Component {

  getAnimalPictures() {
    return (

      <div>Pictures Here</div>
    )
  }

  render() {
    var shelter = this.props.shelterData
    if (!this.props.shelterData) {
      return (
        <div>
          <h1>Please click on an animal shelter to see Animal Shelter information.</h1>
        </div>
      )
    }
    else {

      return (
        <div>
          <h1>{shelter.name.$t}</h1>
          <p>Address: {shelter.name.$t}, {shelter.city.$t}, {shelter.state.$t}, {shelter.zip.$t}</p>
          <p>Phone Number: {shelter.phone.$t}</p>
          <p>Email: {shelter.email.$t}</p>
          <h2>Available Animals:</h2>
          <p><a href={"https://www.petfinder.com/pet-search?shelterid=" + shelter.id.$t} target="_blank">Click Here</a> for details about each animal</p>

          <br/>
          {this.getAnimalPictures()}

        </div>
      )
    }
  }
}