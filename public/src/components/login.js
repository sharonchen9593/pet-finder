
import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import {userSigninRequest} from '../../actions';


class LogIn extends React.Component {
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

  onSubmit(e) {
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    console.log(email, password);
    var self = this;
    this.props.userSigninRequest(this.state);
  }

  render() {
    let {isSigninSuccess, signinError} = this.props;
    return (
      <form className="loginform" onSubmit = {this.onSubmit.bind(this)}>
        <h1>Log In</h1>
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
        <button type="submit">Log In</button>

        {isSigninSuccess && <Redirect to= '/profile'/>}
        {signinError && <div>Invalid Email or Password</div>}
      </form>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSigninSuccess: state.isSigninSuccess,
    signinError: state.signinError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSigninRequest: (email, password) => dispatch(userSigninRequest(email, password))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn)   // for redux-thunk

