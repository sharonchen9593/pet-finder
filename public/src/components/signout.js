import React from 'react';
import {connect} from 'react-redux';
import {userSignoutRequest} from '../../actions';

class Signout extends React.Component {
  componentWillMount() {
    this.props.userSignoutRequest();
  }
  render() {
    return <div className="page">You are signed out.</div>
  }
}



export default connect(null, {userSignoutRequest})(Signout)