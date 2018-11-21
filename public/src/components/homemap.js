import React from 'react';
import {ReactBingmaps} from 'react-bingmaps';
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

  componentDidUpdate() {
    if (this.props.center.lat !== this.state.lat || this.props.center.lng !== this.state.lng) {
      this.setState({lat: this.props.center.lat, lng: this.props.center.lng}, this.getZipCode.bind(this))
    }
  }

  getZipCode() {
    var self = this

    axios.get('https://dev.virtualearth.net/REST/v1/Locations/'+ this.state.lat + ',' + this.state.lng +'?o=json&key=AuRbcAwIx_0SzaiLUyuQpivMdgWDYnZQUc8k813y_OyiOZXB0nrc-pU4szXm1HfF')
    .then(function(res){
      var zipcode = res.data.resourceSets[0].resources[0].address.postalCode
      self.setState({zipcode}, self.getShelters.bind(self))
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
        var mark = {
          location: [Number(shelter.latitude.$t), Number(shelter.longitude.$t)],
          option: {color: 'red'},
          addHandler: {
            type: 'click',
          }
        }
        shelterMarkers.push(mark)
      })
      self.setState({markers: shelterMarkers})
    })
    .catch(function(err) {
      console.log("error", err)
    })
  }

  render() {
    return (
      <ReactBingmaps
        bingmapKey="Apaf0GP4Jgi3QQuJI5ViTadfDyoub9tcHiynfTaZxRMEQIBQg1S94TihbBuexxIf"
        center={[this.state.lat, this.state.lng]}
        pushPins={this.state.markers}
        ref={this.mapRef}
      >
      </ReactBingmaps>
    )
  }
}

export default Map;
