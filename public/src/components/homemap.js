import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import axios from 'axios';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      lat: 37.0902,
      lng: -95.7129,
      map: null
    }
  }

  changeState(lat, lng, zoom) {

    this.setState({lat: lat, lng: lng, zoom: zoom}, this.getPets(lat, lng))

  }

  getPets() {
    console.log("hi")
  }

  // componentDidMount() {
  //   var self = this;
  //   $.ajax({
  //     url: "https://geoip-db.com/jsonp",
  //     jsonpCallback: "callback",
  //     dataType: "jsonp",
  //     success: function( location ) {
  //       console.log(location)
  //       self.changeState(location.latitude, location.longitude, 10)
  //     }
  //   });
  // }

  mapMoved() {
    console.log('moved', JSON.stringify(this.state.map.getCenter()))
  }

  mapLoaded(map) {
    if (this.state.map != null) {
      return
    } else {

      this.setState({map})
    }
  }

  render() {
    var markers = this.props.markers || []
    return (
        <GoogleMap
          zoom={this.props.zoom}
          center={this.props.center}
          onDragEnd={this.mapMoved.bind(this)}
          ref={this.mapLoaded.bind(this)}
          >

          {markers.map((marker, index)=>(
              <Marker {...marker} />
            )
          )}
        </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)
