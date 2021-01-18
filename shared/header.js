/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: header.js - shared header file for all screens
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export default function Header(){

    const openMenu = () => {
        //navigation.openDrawer()
    }

    return(
        <View style={styles.header}>
            <View style={styles.icon}>
                <Icon name='menu' size= {28} onPress={openMenu}  />
            </View>
            <View style ={styles.headerText}>
                <Text>My GameZone</Text>
            </View>
        </View>
    )
}

// header style will only apply to the header section that comes with stack navigation 
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',  // left to right orientation
        alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
        justifyContent: 'center', // works in axis direction, in this case will be centered horizontally
        //backgroundColor: '#f4511e',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 40,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 6,
    }
})