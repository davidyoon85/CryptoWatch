import React,{ Component } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

import Input from './Input';

class LoginForm extends Component {
    state = {email:'', password:''};

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