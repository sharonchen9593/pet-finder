import React from 'react';
import HomeMap from './homemap'
import axios from 'axios';
// //import petfinderapi from 'pet-finder-api';
// // var petfinder = require('petfinder')('e8bc141aa160a7c51a8460be64c1a929','12da585d090d6a12d72dac3dee07eb51')
// var petfinder = require('pet-finder-api')('e8bc141aa160a7c51a8460be64c1a929','12da585d090d6a12d72dac3dee07eb51')

//https://api.petfinder.com/pet.find?format=json&key=e8bc141aa160a7c51a8460be64c1a929&location=94587&count=1000



export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: '..',
      shelters: '..',
      birds: '..',
      reptiles: '..',
      small: '..'
    }
  }
  componentDidMount() {
    // axios.get('https://cors-anywhere.herokuapp.com/https://api.petfinder.com/pet.find?format=json&key=e8bc141aa160a7c51a8460be64c1a929&location=94587&animal=bird&count=1000')
    // .then(function(result) {
    //   console.log(result)
    // })
    // .catch(function(err){
    //   console.log(err)
    // })
    var self = this
    $.ajax({
    url:'https://cors-anywhere.herokuapp.com/' +
        'https://www.petfinder.com/',
        type:'GET',
        success: function(data){
           var petNumber = $(data).find('#welcome-pet-total').text();
           var shelterNumber = $(data).find('#welcome-shelter-total').text();
           self.setState({pets:petNumber, shelters:shelterNumber})
        }
    })
  }

  render() {
    return (
      <div className="page">
        <div className="homebg">
        Save a life <br/> Adopt a best friend
        <br/>
        <a href="/search"><button className="homesearch">Search Now</button></a>
        </div>
        <div className="homemap">
          <HomeMap
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}/>
        </div>
        <div className="banner">
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/reptile.jpeg')", height: "100%", width: "14.4%"}}>
          {this.state.pets}
          <br/>
          Pets Need a Home
          </div>
        </a>
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/bird.jpeg')", height: "100%", width: "14.4%"}}>
          {this.state.shelters}
          <br/>
          Shelters Need Help
          </div>
        </a>
        <a href="/random">
          <div className="banneritem" style={{backgroundImage: "url('../../images/smallfurry.jpeg')", height: "100%", width: "14.4%"}}>
          <br/>
          Find a Random Pet
          </div>
        </a>
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/cat.jpeg')", height: "100%", width: "14.4%"}}>
          {this.state.birds}
          <br/>
          ..
          </div>
        </a>
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/dog.jpeg')", height: "100%", width: "14.4%"}}>
          {this.state.reptiles}
          <br/>
          ..
          </div>
        </a>
        <a href="/lostandfound">
          <div className="banneritem" style={{backgroundImage: "url('../../images/lost.jpeg')",height: "100%", width: "14%"}}>
          <i className="fa fa-search"></i>
          <br/>
            Lost/Found a Pet
          </div>
        </a>
        <a href="/donate">
          <div className="banneritem" style={{backgroundImage: "url('../../images/donate.jpeg')",height: "100%", width: "14%"}}>
          <i className="fa fa-gift"></i>
          <br/>
            Donate for a cause
          </div>
        </a>
        </div>

      </div>
    )
  }
}
          // <img src = "../../images/dog.jpeg" className="bannerimg" />