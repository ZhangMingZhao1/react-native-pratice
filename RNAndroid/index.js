import React, { Component } from 'react';import { Text, AppRegistry } from 'react-native';

export default class App extends Component {
  render() {    return ( <Text>Hello world!</Text>);
  }}
AppRegistry.registerComponent('application', () => App);