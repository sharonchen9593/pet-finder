import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends React.Component {
	render() {
		var markers = this.props.markers || []
		return (
				<GoogleMap
					defaultZoom={4}
				  defaultCenter={{lat:37.0902 , lng:-95.7129}}>
				  {markers.map((marker, index)=>(
				  		<Marker {...marker} />
				  	)
				  )}


				</GoogleMap>
		)
	}
}

export default withGoogleMap(Map)

