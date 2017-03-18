import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
 
import Login from './src/pages/Login';
 
export default class ScrumBoard extends Component {
 
  render() {
    return (
      <Login />
    );
  }
 
}
 
AppRegistry.registerComponent('ScrumBoard', () => ScrumBoard);
