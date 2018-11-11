import React, { Component } from 'react';
import requireAuth from '../HOCs/requireAuth';

export class FeaturePage extends Component {
  render() {
    return (
      <div>
        <h2> this is feature page</h2>
      </div>
    );
  }
}

export default requireAuth(FeaturePage);
