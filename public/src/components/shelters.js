import React from 'react';
import ShelterMap from './sheltermap';
import ShelterResults from './shelterResults';
import axios from 'axios';

export default class Shelters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null, //37.0902,
      lng: null, //-95.7129,
      zoom: null, //4,
      initialLoad: false,
      currentShelter: null,
      currentShelterPets: null
    }
  }

  changeState(lat, lng, zoom) {

    this.setState({lat: lat, lng: lng, zoom: zoom, initialLoad: true, zoom: zoom})

  }

  clickedShelter(shelterData) {
    this.setState({
      currentShelter: shelterData
    }, this.getCurrentShelterPets.bind(this))
  }

  getCurrentShelterPets() {
    var shelterId = this.state.currentShelter.id.$t
    var self = this;
    axios.get('https://cors-anywhere.herokuapp.com/https://api.petfinder.com/shelter.getPets?format=json&key=e8bc141aa160a7c51a8460be64c1a929&count=100&id='+shelterId)
    .then(function(res) {
      console.log(res)
      var pets = res.data.petfinder.pets.pet
      self.setState({currentShelterPets:pets})

    })
    .catch(function(err) {
      console.log("err", err)
    })
  }

  render() {
    if (this.state.initialLoad===false) {
      var self=this;
      $.ajax({
        url: "https://geoip-db.com/jsonp",
        jsonpCallback: "callback",
        dataType: "jsonp",
        asynce: false,
        success: function( location ) {
          self.changeState(location.latitude, location.longitude, 10)
        }
      });
    }

    return (
      <div className="page">
        <div className="sheltermap">
          <ShelterMap
            center={{lat:this.state.lat, lng: this.state.lng}}
            clickedShelter = {this.clickedShelter.bind(this)}
            />

        </div>
        <div className="shelterSearchResults">
          <ShelterResults
            shelterData={this.state.currentShelter}
            shelterPets={this.state.currentShelterPets}
          />
        </div>
      </div>
    )
  }
}