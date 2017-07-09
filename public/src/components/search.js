import React from 'react';

export default class Search extends React.Component {
	 getInitialState () {
    return {
      breeds: []
    }
  }

componentDidMount () {
    fetch('./search')
  }


	render() {
		return (
			<div className="searchbox">
				<select name="animal" form="search" className="search">
					<option value="" disabled selected>Select Animal</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="smallfurry">Small & Furry</option>
					<option value="horse">Horse</option>
					<option value="bird">Bird</option>
					<option value="reptile">Reptile</option>
					<option value="barnyard">Barnyard</option>
				</select>

				<select name="breed" form="search" className="search">
					<option value="" disabled selected>Select Breed</option>
				</select>
				<input className="search" type="text" name="zipcode" placeholder="Zip Code"/>
			</div>
		)
	}
}