import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import axios from 'axios';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      lat: 37.0902,
      lng: -95.7129,
      zoom: 4
    }
  }

  changeState(lat, lng, zoom) {

    this.setState({lat: lat, lng: lng, zoom: zoom})
    console.log(this.state.lat, this.state.lng, this.state.zoom)
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: "https://geoip-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function( location ) {
        console.log(location)
        self.changeState(location.latitude, location.longitude, 10)
      }
    });
  }

  render() {
    var markers = this.props.markers || []
    return (
        <GoogleMap
          defaultZoom={this.state.zoom}
          defaultCenter={{lat:this.state.lat, lng:this.state.lng}}
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
