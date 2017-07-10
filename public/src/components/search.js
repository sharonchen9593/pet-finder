import React from 'react';
import axios from 'axios';


export default class Search extends React.Component {
	  constructor(props) {
    super(props)
    this.state = {
    	value : 'dog',
    	breed : ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  	this.setState({value:event.target.value})

  }

 	stateValue() {
 		console.log(this.state.value)
 		axios.post('/breed', {
  		breed: this.state.value
  	})
  	.then((response) => {
   	 console.log(response.data)
   	 this.setState({breed:response.data})
  })
 	}

	render() {
		return(
			<form>
				<label>
					Animal:
					<select value={this.state.value} onChange={this.handleChange}>
 				  	<option value="dog">Dog</option>
 			  		<option value="cat">Cat</option>
 			  		<option value="smallfurry">Small & Furry</option>
			  		<option value="horse">Horse</option>
			  		<option value="bird">Bird</option>
				  	<option value="reptile">Reptile</option>
				  	<option value="barnyard">Barnyard</option>
					</select>
					{this.stateValue()}
				</label>
					<label>
						Breed:
						<select>
							<option></option>

						</select>

						</label>
			</form>

		)
	}
}



// <div className="searchbox">
// 				<select name="animal" onClick->
// 					<option value="" disabled selected>Select Animal</option>
// 					<option value="dog">Dog</option>
// 					<option value="cat">Cat</option>
// 					<option value="smallfurry">Small & Furry</option>
// 					<option value="horse">Horse</option>
// 					<option value="bird">Bird</option>
// 					<option value="reptile">Reptile</option>
// 					<option value="barnyard">Barnyard</option>
// 				</select>

// 				<select name="breed" form="search" className="search">
// 					<option value="" disabled selected>Select Breed</option>
// 				</select>
// 				<input className="search" type="text" name="zipcode" placeholder="Zip Code"/>
// 			</div>