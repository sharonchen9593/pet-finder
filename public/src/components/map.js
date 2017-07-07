import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends React.Component {
	render() {
		var markers = this.props.markers || []
		return (
				<GoogleMap
					defaultZoom={3}
				  defaultCenter={{lat:37.59 , lng:-122.04}}>
				  {markers.map((marker, index)=>(
				  		<Marker {...marker} />
				  	)
				  )}


				</GoogleMap>
		)
	}
}

export default withGoogleMap(Map)

