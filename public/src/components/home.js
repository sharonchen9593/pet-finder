import React from 'react';
import HomeMap from './homemap'
import axios from 'axios';
import $ from 'jquery'



export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: '..',
      shelters: '..',
      lat: null, //37.0902,
      lng: null, //-95.7129,
      zoom: null, //4,
      initialLoad: false

    }
  }
  componentDidMount() {
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

  changeState(lat, lng, zoom) {

    this.setState({lat: lat, lng: lng, zoom: zoom, initialLoad: true, zoom: zoom})

  }

  render() {
    if (this.state.initialLoad===false) {
      var self=this;
      $.ajax({
        url: "https://geoip-db.com/jsonp",
        jsonpCallback: "callback",
        dataType: "jsonp",
        asynce: false,
        success: function( location ) {
          self.changeState(location.latitude, location.longitude, 10)
        }
      });
    }


    return (
      <div className="page">
        <div className="homebg">
        Save a life <br/> Adopt a best friend
        <br/>
        <a href="/shelters"><button className="homesearch">Search Now</button></a>
        </div>

        <a href="/shelters"><div className="homemap">
          <HomeMap
            center={{lat:this.state.lat, lng: this.state.lng}}
            zoom={this.state.zoom}
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}/>
        </div>
        </a>




        <div className="banner">
        <a href="/shelters">
          <div className="banneritem" style={{backgroundImage: "url('../../images/reptile.jpeg')", height: "100%", width: "14.4%"}}>
          {this.state.pets}
          <br/>
          Pets Need a Home
          </div>
        </a>
        <a href="/shelters">
          <div className="banneritem" style={{backgroundImage: "url('../../images/bird.jpeg')", height: "100%", width: "14.4%"}}>
          {this.state.shelters}
          <br/>
          Shelters Need Help
          </div>
        </a>
        <a href="/random">
          <div className="banneritem" style={{backgroundImage: "url('../../images/smallfurry.jpeg')", height: "100%", width: "14.4%"}}>
          Find a Random <br/> Pet
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
        <a href="/login">
          <div className="banneritem" style={{backgroundImage: "url('../../images/cat.jpeg')", height: "100%", width: "14.4%"}}>
          <br/>
          Log In
          </div>
        </a>
        <a href="/signup">
          <div className="banneritem" style={{backgroundImage: "url('../../images/dog.jpeg')", height: "100%", width: "14.4%"}}>
          <br/>
          Sign Up
          </div>
        </a>
        </div>

      </div>
    )
  }
}
          // <img src = "../../images/dog.jpeg" className="bannerimg" />