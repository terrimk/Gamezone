/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: home.js - Home screen
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from './styles/global';

export default function Home({ navigation }) {

    // VER 4:
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to review details page' onPress={pressHandler}/>
        </View>
    )
}

