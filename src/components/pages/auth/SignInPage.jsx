import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../../actions/auth';

class SignIn extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" />
        </fieldset>

        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <div>{this.props.err}</div>
        <button type="submt"> SIGN IN </button>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  err: auth.error
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signin' })
)(SignIn);
