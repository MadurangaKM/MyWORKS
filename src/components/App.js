import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigation from './AppNavigation';

export default class MyAlbum extends Component {

  render() {
    return (
      <View style={{ flex: 1 }} >
         <AppNavigation />
      </View>
    );
  }
}
