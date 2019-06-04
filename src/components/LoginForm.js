import React,{ Component } from 'react';
import { View, Button } from 'react-native';
import Input from './Input';

class LoginForm extends Component {
    state = {email:'', password:''};

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

            <Button title="Sign in" onPress={() => ''} />
            </View>
        )
    }
}

export default LoginForm;