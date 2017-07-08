import React from 'react';

export default class LostAndFoundEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      email: '',
      phoneNumber: '',
      lostOrFound: '',
      imageStr: '',
      location: '',
      animal: '',
      breed: '',
      description: ''
    }
  }

  componentDidMount() {
    var entry = this.props.entry
    this.setState({
      email: entry.email,
      phoneNumber: entry.phoneNumber,
      lostOrFound: entry.lostOrFound,
      imageStr: entry.imageStr,
      location: entry.location,
      animal: entry.animal,
      breed: entry.breed,
      description: entry.description
    })
  }

  render() {
    return (
      <div className="entry">
        <div className="entryImg">
          <img src={this.state.imageStr} />
        </div>
        <div className="entryData">
          <h1>{this.state.lostOrFound.toUpperCase()}</h1>
          <p>Email: {this.state.email}</p>
          <p>Phone Number: {this.state.phoneNumber}</p>
          <p>Location: {this.state.location}</p>
          <p>Animal Type: {this.state.animal}</p>
          <p>Breed: {this.state.breed}</p>
          <p>Description: {this.state.description}</p>
        </div>


      </div>
    )
  }
}