/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.hearder}>
            <LinearGradient colors={['#F8A566', '#EE7866']} style={styles.height}>
        <View style={styles.titleView}>
          <Text style={styles.title}> {this.props.headerText}</Text>
        <TouchableOpacity
          onPress={() => firebase.auth().signOut()}
        >
        <View style={styles.imageStyle}>

        <Image 
                source={require('../img/signout.png')}
                style={styles.Image}
        />
        </ View>

        </ TouchableOpacity>

        </View>
        
        </LinearGradient>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    hearder: {
        backgroundColor: '#3498db',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        
    },
    height: {
      height: 60,

    },
    titleView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
      //backgroundColor: 'red',
      justifyContent: 'center',
    },

    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        //backgroundColor: 'green',
        paddingLeft: 30,
        //paddingRight: 70,
        flex: 0.9

    },
    Image: {
      width: 30,
      height: 25,
  },
  imageStyle: {
    //backgroundColor: 'yellow',
    flex: 0.1,
    justifyContent: 'center',


  }

});

module.exports = Header;
/* eslint-disable eol-last */