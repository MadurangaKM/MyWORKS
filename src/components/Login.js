/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, TouchableOpacity } 
from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import TextFiled from '../components/TextField';
import Loading from '../components/Loading';


export default class Login extends Component {
    state = { email: '', password: '', error: '', loading: false };

     onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((error) => {
                this.setState({ error: error.message, loading: false });
                console.log(error);  
            });  
        }
    onButtonPressSignUp() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch((error) => {
            this.setState({ error: error.message, loading: false });
            console.log(error);
        });
    }
        onLoginSuccess() {
            this.setState({
                email: '',
                password: '',
                loading: false,
                error: '',

            });
        }
        
        renderButton() {
            if (this.state.loading) {
                return (
                    <Loading size="small" /> 
                 
                );
            }
            return (
                <Button 
                btnText={'LOGIN'}
                onPress={this.onButtonPress.bind(this)}
                />
            );
        }
       
  render() {
    return (
        <View style={styles.containerStyle} >
        <Animatable.View 
            animation="zoomIn" iterationCount={1}
            style={styles.containerLogoStyle}

        >
            <Image 
                source={require('../img/logo.png')}
                style={styles.Image}
            />
        </Animatable.View >
        
        <KeyboardAvoidingView
            behavior='position'


        >
        <Animatable.View
            animation="slideInUp" iterationCount={1}
            style={styles.from}


        >
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{this.state.error}</Text>
          </View>
            <TextFiled
                value={this.state.email}
                onChangeText={email => this.setState({ email })}

                placeHold='Enter Username'
                returnKeyType='next'
                autoCapitalize='none'
                onSubmitEditing={() => this.refs.passwordnext.focus()}
               
            />
            <TextFiled 
                value={this.state.password}
                onChangeText={password => this.setState({ password })}

                placeHold='Password' 
                secureTextEntry
                returnKeyType='go'
                autoCapitalize='none'
                autoCorrect={false}
                ref={'passwordnext'}
                onSubmitEditing={this.onButtonPress.bind(this)}

            />
            
            {this.renderButton()}

            <TouchableOpacity
                onPress={this.onButtonPressSignUp.bind(this)}
            >
            <Text style={styles.signUp}>Don't have a Account? Sign Up</Text>
            </ TouchableOpacity>
            <Text style={styles.Text}>Copyright by MaduDesign</Text>
            </Animatable.View>

        </KeyboardAvoidingView>
       

     </View>
    );
  }
}


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
    },
    containerLogoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.97,
       
    },
    Image: {
        width: 280,
        height: 100,
        
        
    },
    from: {
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FFF'
    },
    Text: {
        marginTop: 10,
        color: '#C3C3C3',
    },
    errorText: {
        color: '#e74c3c',
        paddingTop: 10,
        fontSize: 15,
      
    },
    signUp: {
        marginTop: 10,
        color: '#C55D53',
        fontSize: 18,
        fontWeight: 'bold',
    }
});


module.exports = Login;
/* eslint-disable eol-last */