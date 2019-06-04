import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title='CryptoWatch' />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
