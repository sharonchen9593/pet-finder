import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import axios from 'axios';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      lat: 37.0902,
      lng: -95.7129,
      zoom: 4,
      location: ''
    }
  }

  changeState(lat, lng, zoom) {

    this.setState({lat: lat, lng: lng, zoom: zoom}, this.getPets(lat, lng))

  }

  getPets() {
    console.log("hi")
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: "https://geoip-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function( location ) {
        self.changeState(location.latitude, location.longitude, 10)
      }
    });
  }

  render() {
    var markers = this.props.markers || []
    return (
        <GoogleMap
          zoom={this.state.zoom}
          center={{lat:this.state.lat, lng:this.state.lng}}
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
