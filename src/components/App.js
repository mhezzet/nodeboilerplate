import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layouts/Header';
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/auth/SignUpPage';
import SignInPage from './pages/auth/SignInPage';
import FeaturePage from './pages/FeaturePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/signin" exact component={SignInPage} />
            <Route path="/feature" exact component={FeaturePage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
