import React from 'react';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      email: '',
      password: ''
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {

    return (
      <form className="loginform">
        <h1>Log In</h1>
        <br />
        <label>Email:</label>
        <br />
        <input type="email"
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
        <button type="submit">Log In</button>

      </form>

    );
  }
}