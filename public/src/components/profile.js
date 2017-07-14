import React from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

const username=localStorage.getItem('username')

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      loaded: false,
      destinations: []
    }
  }

  // getUserDestinations() {
  //   var username = localStorage.username
  //   var self = this
  //   axios.post('/userData', JSON.stringify({email: email}))
  //   .then(function(response) {
  //       self.renderUserDestinations(response.data.destinations)
  //   })
  //   .catch(function(err) {
  //     console.log("desterr", err)
  //   })
  // }

  // renderUserDestinations(destinations) {
  //   if (this.state.loaded === false) {
  //     this.setState({destinations: destinations, loaded: true})

  //   }
  // }

  render() {
    if (!localStorage.getItem('reload')) {
      localStorage.setItem('reload', true)
      window.location.reload()
    }
    return (
      <div className = "profile">
        <div className = "content1">
          <h1>Profile</h1>
          <div className = "fontawesome"><i className="fa fa-user-circle-o"></i></div>
          <p>Email</p>

        </div>
        <div className = "content2">
          <p>currently working on adding more features. please checkback soon.</p>
        </div>
      </div>
    );
  }
}
