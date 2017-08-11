import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from  './src/components/App';

export default class WeatherApp extends Component {
  render() {
    return <App />
  }
}

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
