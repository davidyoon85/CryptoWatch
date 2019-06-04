import React, {Component} from 'react';
import { Button, StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase'

import Store from './src/Store';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    let config = {
      apiKey: "AIzaSyAlgOvNvcNDuHf8S-19WDGypBxSqGaUQ8o",
      authDomain: "cryptowatch-70367.firebaseapp.com",
      databaseURL: "https://cryptowatch-70367.firebaseio.com",
      projectId: "cryptowatch-70367",
      storageBucket: "cryptowatch-70367.appspot.com",
      messagingSenderId: "489116999570",
      appId: "1:489116999570:web:b7d96bd921a5d1ea"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
  })
  }

  renderComponent() {
    if (this.state.loggedIn) {
      return (
        <Button
         title="Sign out"
         onPress={() => firebase.auth().signOut()} 
         />
      );
    }
    return (
      <LoginForm />
    );
  }

  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header title='CryptoWatch' />
          {this.renderComponent()}
        </View>
      </Provider>
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
