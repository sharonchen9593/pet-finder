import React from 'react';
import {withGoogleMap, GoogleMap, Marker, Circle} from 'react-google-maps';
import axios from 'axios';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      gotLocationShelters: false,
      zipcode: null,
      lat: null,
      lng: null,
      map: null,
      markers: [],
      shelters: []
    }
  }

  mapMoved() {
    var center = JSON.parse(JSON.stringify(this.state.map.getCenter()))
    var lat = center.lat
    var lng = center.lng

    this.setState({lat, lng}, this.getZipCode.bind(this))

  }

  mapLoaded(map) {
    if (this.state.map != null) {
      return
    } else {
      this.setState({map})
    }
  }

  componentDidUpdate() {
    if (this.props.zoom && !this.state.gotLocationShelters) {
      this.setState({gotLocationShelters:true, lat: this.props.center.lat, lng: this.props.center.lng}, this.getZipCode.bind(this))
    }
  }

  getZipCode() {
    var self = this
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.state.lat + ',' +this.state.lng + '&sensor=false')
    .then(function(res){
      var results = res.data.results[0].address_components

      results.forEach(function(item) {
        if (item.types[0]==="postal_code") {
          var zipcode = Number(item.long_name)
          self.setState({zipcode}, self.getShelters.bind(self))
        }
      })
    })
    .catch(function(err) {
      console.log("err",err)
    })
  }

  getShelters() {
    var shelterMarkers = [];
    var self = this;
    axios.get('https://cors-anywhere.herokuapp.com/https://api.petfinder.com/shelter.find?format=json&key=e8bc141aa160a7c51a8460be64c1a929&location='+ this.state.zipcode +'&count=100')
    .then(function(res) {
      var shelters = res.data.petfinder.shelters.shelter
      shelters.forEach(function(shelter) {
        var mark = {position: {lat: Number(shelter.latitude.$t), lng: Number(shelter.longitude.$t)}}
        shelterMarkers.push(mark)
      })
      self.setState({markers: shelterMarkers, shelters})
    })
    .catch(function(err) {
      console.log("error", err)
    })
  }

  clickMarker(index) {
    this.props.clickedShelter(this.state.shelters[index])
  }

  render() {
    var markers = this.state.markers
    return (
        <GoogleMap
          zoom={this.props.zoom}
          center={this.props.center}
          onDragEnd={this.mapMoved.bind(this)}
          ref={this.mapLoaded.bind(this)}
          >
          {markers.map((marker, index)=>(
              <Marker {...marker} key={index}
              onClick={this.clickMarker.bind(this, index)}
              />
            )
          )}
        </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
