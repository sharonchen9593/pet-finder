import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			lat: 37.0902,
			lng: -95.7129,
			zoom: 4
		}
	}
	render() {
		var markers = this.props.markers || []
		return (
				<GoogleMap
					defaultZoom={this.state.zoom}
				  defaultCenter={{lat:this.state.lat, lng:this.state.lng}}>
				  {markers.map((marker, index)=>(
				  		<Marker {...marker} />
				  	)
				  )}
				</GoogleMap>
		)
	}
}

export default withGoogleMap(Map)

