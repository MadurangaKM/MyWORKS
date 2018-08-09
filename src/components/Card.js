/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import ButtonDelete from '../components/ButtonDelete';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.divider}>
            <Image 
                source={require('../img/divider.png')}
            />
        </View>
        <View style={styles.text} >
            <Text style={styles.date}>2018/08/07</Text>
            <Text style={styles.sub}>React Native Tutorial</Text>
        </View>

       <View style={styles.imagebtn}>
         <ButtonDelete />
      </View>
      </View>
        
    );
  }
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFF',
        height: 65,
        margin: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        alignItems: 'center',
        paddingLeft: 7,
        flexDirection: 'row',
       
    },
    text: {
        flex: 0.8,

    },

    divider: {
        flex: 0.06,
    },
    imagebtn: {
        alignItems: 'flex-end', 
        flex: 0.2,


    },
    date: {
        color: '#828282',
        fontSize: 12,

    },
    sub: {
        color: '#616161',
        fontSize: 20,
    }
});

module.exports = Card;
/* eslint-disable eol-last */