import React, { Component} from 'react';
import {connect} from 'react-redux';

export class UserProfile extends Component {
  render() {
    return <div>
    isLoggedIn: {this.props.auth.isLoggedIn ? 'true': 'false'}<br />
    Name: {this.props.auth.name}<br />
    Role: {this.props.auth.role}<br />
    </div>
  }
}

function mapStateToProps(state) {
  console.log('inside mapStateToProps',state);
  return { auth: state.auth }
}
export default connect(mapStateToProps)(UserProfile)

