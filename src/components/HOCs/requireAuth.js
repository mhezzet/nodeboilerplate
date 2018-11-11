import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class composedComponent extends Component {
    componentDidMount() {
      this.shoudNavigateAway();
    }

    componentDidUpdate() {
      this.shoudNavigateAway();
    }

    shoudNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth: auth.token
  });

  return connect(mapStateToProps)(composedComponent);
};
