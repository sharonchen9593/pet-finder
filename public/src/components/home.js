import React from 'react';
import HomeMap from './homemap'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="page">
        <div className="homebg">
        Save a life, adopt a best friend
        </div>
        <div className="homemap">
          <HomeMap
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}/>
        </div>
        <div className="banner">
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/dog.jpeg')", height: "100%", width: "14.4%"}}>
          NUMBER
          <br/>
          Dogs need a home
          </div>
        </a>
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/cat.jpeg')", height: "100%", width: "14.4%"}}>
          NUMBER
          <br/>
          Cats need a home
          </div>
        </a>
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/bird.jpeg')", height: "100%", width: "14.4%"}}>
          NUMBER
          <br/>
          Birds need a home
          </div>
        </a>
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/reptile.jpeg')", height: "100%", width: "14.4%"}}>
          NUMBER
          <br/>
          Reptiles need a home
          </div>
        </a>
        <a href="/search">
          <div className="banneritem" style={{backgroundImage: "url('../../images/smallfurry.jpeg')", height: "100%", width: "14.4%"}}>
          NUMBER
          <br/>
          Small animals need a home
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