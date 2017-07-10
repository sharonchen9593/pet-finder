import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      email: '',
      password: '',
      confirmPassword: '',
      authenticated: false,
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {

    return (
      <form className = "loginform">
        <h1>Sign Up</h1>
        <br />
        <label>Email:</label>
        <br />
        <input type="text"
               name="email"
               value={this.state.email}
               onChange = {this.onChange.bind(this)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange = {this.onChange.bind(this)}
        />
        <br />
        <label>Confirm Password:</label>
        <br />
        <input type="password"
               name="confirmPassword"
               value={this.state.confirmPassword}
               onChange = {this.onChange.bind(this)}
        />
        <br />
        <button type="submit">Submit</button>

      </form>
    );
  }
}



