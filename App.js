import React, {Component} from 'react';
import { Button, StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase'

import Store from './src/Store';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';
import Main from './src/components/Main';

// export default class App extends Component {
//   state = { loggedIn: null };

//   render() {
//     return (
//       <Provider store={Store}>
//         <StackNavigator />
        
//         {/* <View>
//           <Header title='CryptoWatch' />
//           {this.renderComponent()}
//         </View> */}
//       </Provider>
//     );
//   }
// }

const StackNavigator = createStackNavigator({
    Home: LoginForm,
    Main: Main
})

const AppContainer = createAppContainer(StackNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
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


