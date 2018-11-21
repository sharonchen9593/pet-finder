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
      markers: []
    }
  }

  // componentDidMount() {
  //   const script = document.createElement('script');
  //    script.src = './sdk/tomtom.min.js';
  //    document.body.appendChild(script);
  //    script.async = true;
  //    script.onload = function () {
  //      window.tomtom.L.map('map', {
  //        source: 'vector',
  //        key: 'AkXXEjhxImrro7wWpQIDniNx1iVNirqy',
  //        center: [37.769167, -122.478468],
  //        basePath: '/sdk',
  //        zoom: 15
  //      });
  //    }
  // }

  // componentDidUpdate(prevProps) {
  //   const newState = {}
  //   if (this.props.center.lng !== this.state.lng) {
  //     newState.lng = this.props.center.lng
  //   }

  //   if (this.props.center.lat !== this.state.lat) {
  //     newState.lat = this.props.lat
  //   }

  //   if (newState.lat || newState.lng) {
  //     this.setState(() => (newState))
  //   }

  // }


  changeState(lat, lng, zoom) {

    this.setState({lat: lat, lng: lng, zoom: zoom}, this.getPets(lat, lng))

  }

  getPets() {
    console.log("hi")
  }


  mapMoved() {
    var center = JSON.parse(JSON.stringify(this.state.map.getCenter()))
    var lat = center.lat
    var lng = center.lng

    this.setState({lat, lng})
    console.log(this.state)

    // axios.get('http://api.geonames.org/findNearbyPostalCodesJSON?lat='+ lat+ '&lng=' + lng + '&username=furryfriends')
    // .then(function(res){
    //   console.log("res",res)
    // })
    // .catch(function(err) {
    //   console.log("err",err)
    // })
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
      console.log(res)
      var results = res.data.results[0].address_components

      results.forEach(function(item) {
        if (item.types[0]==="postal_code") {
          var zipcode = Number(item.long_name)
          self.setState({zipcode}, self.getShelters.bind(self))
        }
      })



      // self.setState({zipcode:res.data.postalCodes[0].postalCode}, self.getShelters.bind(self))
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
      self.setState({markers: shelterMarkers})
    })
    .catch(function(err) {
      console.log("error", err)
    })
  }

  render() {
    var markers = this.state.markers
    return (
        <GoogleMap
          zoom={this.props.zoom}
          center={this.props.center}
          onDragEnd={this.mapMoved.bind(this)}
          ref={this.mapLoaded.bind(this)}
          options={{draggable: false}}
          >
          {markers.map((marker, index)=>(
              <Marker {...marker} key={index}/>
            )
          )}
        </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
