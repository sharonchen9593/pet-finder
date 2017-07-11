import React from 'react';
import ShelterMap from './sheltermap';
import ShelterResults from './shelterResults';

export default class Shelters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null, //37.0902,
      lng: null, //-95.7129,
      zoom: null, //4,
      initialLoad: false,
      currentShelter: null
    }
  }

  changeState(lat, lng, zoom) {

    this.setState({lat: lat, lng: lng, zoom: zoom, initialLoad: true, zoom: zoom})

  }

  clickedShelter(shelterData) {
    console.log("clicked", shelterData, this.state)
    this.setState({
      currentShelter: shelterData
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
        <div className="map">
          <ShelterMap
            center={{lat:this.state.lat, lng: this.state.lng}}
            zoom={this.state.zoom}
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}
            clickedShelter = {this.clickedShelter.bind(this)}
            />

        </div>
        <div className="searchResults">
          <ShelterResults
            shelterData={this.state.currentShelter}
          />
        </div>
      </div>
    )
  }
}