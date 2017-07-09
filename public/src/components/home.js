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
        RANDOM PICTURE
        <img src="https://s3-media3.fl.yelpcdn.com/bphoto/nNwtDkoEd7GN5m3f2eCpZg/348s.jpg"/>
        </div>
        <div className="homemap">
          <HomeMap
            containerElement={<div style={{height: '100%'}} />}
            mapElement={<div style={{height: '100%'}} />}/>
        </div>


        <div className="banner" style={{backgroundImage: "url('../../images/dog.jpeg')", height: "200px", width: "200px"}}>
        NUMBER
        <br/>
        Dogs need a home
        </div>

        <div className="banner" style={{backgroundImage: "url('../../images/cat.jpeg')", height: "200px", width: "200px"}}>
        NUMBER
        <br/>
        Cats need a home
        </div>

        <div className="banner" style={{backgroundImage: "url('../../images/bird.jpeg')", height: "200px", width: "200px"}}>
        NUMBER
        <br/>
        Birds need a home
        </div>

        <div className="banner" style={{backgroundImage: "url('../../images/reptile.jpeg')", height: "200px", width: "200px"}}>
        NUMBER
        <br/>
        Reptiles need a home
        </div>

        <div className="banner" style={{backgroundImage: "url('../../images/smallfurry.jpeg')", height: "200px", width: "200px"}}>
        NUMBER
        <br/>
        Small animals need a home
        </div>

        <div className="banner" style={{backgroundImage: "url('../../images/horse.jpeg')", height: "200px", width: "200px"}}>
        NUMBER
        <br/>
        Horses need a home
        </div>

      </div>
    )
  }
}
          // <img src = "../../images/dog.jpeg" className="bannerimg" />