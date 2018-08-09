/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
 

export default class ButtonDelete extends Component {
  render() {
    return (
    <TouchableOpacity>
      <View>
      <Image 
                source={require('../img/button.png')}
                style={styles.Image}
      />

      </View>
      </TouchableOpacity>

    );
  }
}
const styles = StyleSheet.create({
    Image: {
        height: 66,
        width: 73,
    }
});

module.exports = ButtonDelete;
/* eslint-disable eol-last */