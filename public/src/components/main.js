import React from 'react';
import Map from './map';
import Search from './search';
import SearchResults from './searchResults';

export default class Main extends React.Component {
	render() {
		return (
			<div className="page">
  			<Search />
        <div className="map">
    			<Map
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}/>
        </div>
        <div className="searchResults">
          <SearchResults/>
        </div>
			</div>
		)
	}
}