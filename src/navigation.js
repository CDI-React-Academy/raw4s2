import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./modules/actions";
export class Navigation extends Component {
  render() {
    console.log("Navigation render", this.props);
    return (
      <div style={{ background: "#000000", color: "#fff" }}>
        {this.props.auth.isLoggedIn && (
          <div>
            Welcome {this.props.auth.name} |
            <button onClick={this.props.logout}>Logout</button>
          </div>
        )}
        {!this.props.auth.isLoggedIn && (
          <button onClick={this.props.login}>Login</button>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("inside mapStateToProps", state);
  return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => {
      dispatch(Actions.Login("Balwant" + Date.now()));
    },

    logout: () => {
      dispatch(Actions.Logout());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
