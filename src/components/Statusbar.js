import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

export default class Statusbar extends Component {
  render() {
    return (
      <View style={styles.statusbar} >
        <StatusBar
           barStyle="light-content" 
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    statusbar: {
        backgroundColor: '#C55D53',
        height: 25,
    }
});

module.exports = Statusbar;
/* eslint-disable eol-last */