import React from 'react';
import ShelterMap from './sheltermap'

export default class Shelters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null, //37.0902,
      lng: null, //-95.7129,
      zoom: null, //4,
      initialLoad: false

    }
  }

  changeState(lat, lng, zoom) {

    this.setState({lat: lat, lng: lng, zoom: zoom, initialLoad: true, zoom: zoom})

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
            mapElement={<div style={{height: '100%'}} />}/>

        </div>
        <div className="searchResults">
          <div>Shelter Results</div>
        </div>
      </div>
    )
  }
}