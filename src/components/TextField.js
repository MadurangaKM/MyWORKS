import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';


export default class TextField extends Component {
  focus() {
    this.refs.nextkeyinput.focus();
  }
  render() {
    return (
  
          <TextInput 
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            placeholder={this.props.placeHold}
            style={styles.containerStyle}
            placeholderTextColor='#727272'
            secureTextEntry={this.props.secureTextEntry}
            returnKeyType={this.props.returnKeyType}
            autoCapitalize={this.props.autoCapitalize}
            autoCorrect={this.props.autoCorrect}
            onSubmitEditing={this.props.onSubmitEditing}
            ref='nextkeyinput'

          />
        
    
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFF',
        width: '96%',
        height: 40,
        marginTop: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        fontSize: 18,
        paddingHorizontal: 20,
        color: 'black'
    
    },

});
module.exports = TextField;
/* eslint-disable eol-last */