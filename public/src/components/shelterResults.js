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
      this.setState({updated: true}, this.getPetInfo.bind(this))
    }
  }

  getPetInfo() {
      console.log(this.props.shelterData.id.$t)
      var self = this;
      var shelterId = this.props.shelterData.id.$t
      axios.get('https://cors-anywhere.herokuapp.com/https://api.petfinder.com/shelter.getPets?format=json&key=e8bc141aa160a7c51a8460be64c1a929&count=100&id='+shelterId)
      .then(function(res) {
        console.log("res",res)
        var pets = res.data.petfinder.pets.pet
        self.setState({pets:pets})

      })
      .catch(function(err) {
        console.log("err", err)
      })

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
        <div className = "shelterResults">
          <h1>{shelter.name.$t}</h1>
          <p>Address: {shelter.name.$t}, {shelter.city.$t}, {shelter.state.$t}, {shelter.zip.$t}</p>
          <p>Phone Number: {shelter.phone.$t}</p>
          <p>Email: {shelter.email.$t}</p>
          <h2>Available Animals:</h2>
          <p><a href={"https://www.petfinder.com/pet-search?shelterid=" + shelter.id.$t} target="_blank">Click Here</a> for more details about each animal</p>
          <br/>
          {this.state.pets.map(petInfo =>
            <ShelterPetsInfo petInfo={petInfo} key={petInfo.id.$t}/>
          )}


        </div>
      )
    }
  }
}
          // <ShelterPetsInfo petInfo={this.state.pets}/>