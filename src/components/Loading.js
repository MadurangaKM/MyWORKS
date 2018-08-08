import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


export default class Loading extends Component {
  render() {
    return (
        <View style={styles.containerStyle}>
            <ActivityIndicator size={this.props.size || 'large'} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
      
    
    },

});
module.exports = Loading;
/* eslint-disable eol-last */
