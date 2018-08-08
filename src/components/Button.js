import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class Button extends Component {
  render() {
    return (
        <TouchableOpacity 
        onPress={this.props.onPress}
        style={styles.containerStyle}
        >
       

      <View >
          <Text style={styles.text}>{this.props.btnText}</Text>
        
     </View>
    
     </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#F59566',
        width: '96%',
        height: 40,
        marginTop: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
    
    },

    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 8,
    }
});
module.exports = Button;
/* eslint-disable eol-last */