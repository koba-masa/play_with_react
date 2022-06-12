import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

import GoogleMap from './map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap />
      </div>
    );
  }
}
export default App;
