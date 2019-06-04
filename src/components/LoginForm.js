import React,{ Component } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

import Input from './Input';

class LoginForm extends Component {
    state = {
        loggedIn: null,
        email:'', 
        password:''
    };

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
        }})
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
            <Button
                title="Sign out"
                onPress={() => firebase.auth().signOut()} 
                />
        );
    }

    onButtonPress() {
        this.setState({ error: '', loading: true })
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(this.onLoginSuccess.bind(this))
              .catch((error) => {
                let errorCode = error.code
                let errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                  this.onLoginFailure.bind(this)('Weak password!')
                } else {
                  this.onLoginFailure.bind(this)(errorMessage)
                }
            });
        });
    };

    onLoginSuccess() {
        this.setState({
            email: '', password: '', error: '', loading: false
        })
    };

    onLoginFailure(errorMessage) {
        this.setState({ error: errorMessage, loading: false })
    };

    renderButton() {
        if (this.state.loading) {
          return(
              <View style={styles.spinnerStyle}>
                 <ActivityIndicator size={"small"} />
              </View>
          );
        }
        return (
          <Button
            title="Sign in"
            onPress={this.onButtonPress.bind(this)} 
            />
        );
    }

    render() {
        return (
            <View>
                <Input label="Email"
                    placeholder="user@mail.com"
                    value={this.state.email}
                    secureTextEntry={false}
                    onChangeText={email => this.setState({ email })} 
                />
                <Input label="Password"
                    placeholder="password"
                    value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })} 
                />

                {this.renderButton()}
                {this.renderComponent()}

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
            </View>
        )
    }
}

const styles = {
    errorTextStyle: {
      fontSize: 18,
      alignSelf: 'center',
      color: 'red'
    }
}

export default LoginForm;