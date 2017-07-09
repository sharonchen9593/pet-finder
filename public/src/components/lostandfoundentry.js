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
      petName: '',
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
      petName: entry.petName,
      animal: entry.animal,
      breed: entry.breed,
      description: entry.description
    })
  }

  render() {
    return (
      <div className="entry">
        <div>
          <img src={this.state.imageStr} className="entryImg"/>
        </div>
        <div className="entryData">
          <h2>{this.state.lostOrFound.toUpperCase()} - {this.state.petName.toUpperCase()}</h2>
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