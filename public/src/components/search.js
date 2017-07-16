import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
	  constructor(props) {
    super(props)
    this.state = {
    	value : 'dog',
    	breed : [],
    	currentSelectedBreed:'Affenpinscher',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
  }

  handleChange(event) {
  	this.setState({value:event.target.value})
  }

	handleBreedChange(event) {
		this.setState({currentSelectedBreed:event.target.value})

	}


  componentDidMount() {
    console.log(this.state.currentSelectedBreed)
    this.breedPost();

  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.currentSelectedBreed)
  	if(prevState.value !== this.state.value) {
  		this.breedPost()
  	}
  }
  //starting work with google maps


 breedPost() {

 		axios.post('/breed', {
  		breed: this.state.value
  	})
  	.then((response) => {
   	 console.log(response.data)
   	 	  this.setState({ breed: response.data });
  })

 		}

 	breedList() {
 		return(

      this.state.breed.map(function(br){
              return <option value={br}>{br}</option>
            })
      )
 	}

	render() {
		return(

			<form>
        <input className="search" type="text" name="zipcode" placeholder="Zip Code"/>
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

				</label>
					<label>
						Breed:
						<select value={this.state.currentSelectedBreed} onChange={this.handleBreedChange}>
						{this.breedList()}

						</select>
						</label>
			</form>

		)
	}
}
