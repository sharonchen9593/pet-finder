import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {userSignupRequest} from '../../actions';
import { Redirect } from 'react-router';


class SignUp extends React.Component {
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

  onSubmit(e) {
    e.preventDefault();

    var email = this.state.email;

    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;
    var self = this;
    if (password === confirmPassword) {

      this.props.userSignupRequest({email, password})     // for redux-thunk

      // axios.post('/signup', {username, password})
      // .then(function(response) {
       //  console.log(response)
       //  self.setState({authenticated: true, redirect: true})
       //  localStorage.setItem('token', response.token)
      // })
      // .catch(function(error) {
       //  alert("Invalid Username/Password")
      // })
    }
    else {
      alert("Password does not match")
    }

  }


  render() {
    let {isSignupSuccess, signupError} = this.props;
    return (

      <form className = "loginform" onSubmit = {this.onSubmit.bind(this)}>
        <h1>Sign Up</h1>
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
        <label>Confirm Password:</label>
        <br />
        <input type="password"
               name="confirmPassword"
               value={this.state.confirmPassword}
               onChange = {this.onChange.bind(this)}
        />
        <br />
        <button type="submit">Submit</button>
        {isSignupSuccess && <Redirect to= '/profile'/>}
        {signupError && <div>Invalid Email or Password</div>}
      </form>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isSignupSuccess: state.isSignupSuccess,
    signupError: state.signupError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignupRequest: (email, password) => dispatch(userSignupRequest(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
