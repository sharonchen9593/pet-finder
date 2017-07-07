import React from 'react';
import Map from './map';
import Search from './search';

export default class Main extends React.Component {
	render() {
		return (
			<div className="page">
			<Search />
			<Map />
			</div>
		)
	}
}