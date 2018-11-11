import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/auth';
import { connect } from 'react-redux';

class Header extends Component {
  handleOnClick = () => {
    this.props.signout();
  };

  render() {
    return (
      <ul>
        <li>
          <Link to="/">REDUX AUTH</Link>
        </li>
        {!this.props.auth && (
          <li>
            <Link to="/signup">SIGN UP</Link>
          </li>
        )}
        {!this.props.auth && (
          <li>
            <Link to="/signin">SIGN IN</Link>
          </li>
        )}
        <li>
          <Link to="/feature">FEATURES</Link>
        </li>
        <li>
          {this.props.auth && (
            <Link to="/" onClick={this.handleOnClick}>
              SIGN OUT
            </Link>
          )}
        </li>
      </ul>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  auth: auth.token
});

export default connect(
  mapStateToProps,
  { signout }
)(Header);
