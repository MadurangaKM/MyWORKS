import React, { Component } from 'react';
import { View, } from 'react-native';
import firebase from 'firebase';
import Statusbar from '../components/Statusbar';
import Header from '../components/Header';
import Login from '../components/Login';
import Loading from '../components/Loading';
import Card from '../components/Card';

export default class Home extends Component {
  state = { loginIn: null };
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyDcj_xoAdIWL5WRwlV0ZeO7RS1vYZWugwA',
        authDomain: 'myworks-2c0fd.firebaseapp.com',
        databaseURL: 'https://myworks-2c0fd.firebaseio.com',
        projectId: 'myworks-2c0fd',
        storageBucket: 'myworks-2c0fd.appspot.com',
        messagingSenderId: '153510049463'
    

    });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ loginIn: true });
        } else {
            this.setState({ loginIn: false });
        }
    });
}
renderContent() {
  switch (this.state.loginIn) {
    case true:
      return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
         <Header headerText={'MyWORKS'} />
         <Card style={{ flex: 1 }} />
        </View>
        
       );
    case false:
      return <Login />;
    default:
      return <Loading />;
  }
}

  render() {
    return (
      <View style={{ flex: 1 }} >
        <Statusbar />
          {this.renderContent()}
      </View>
    );
  }
}
