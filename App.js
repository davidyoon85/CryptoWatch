import React, {Component} from 'react';
import { Button, StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase'

import Store from './src/Store';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

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
  Login: {
    screen: LoginForm
  }
})

const App = createAppContainer(StackNavigator)

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

export default App;


