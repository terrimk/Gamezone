/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: reviewDetails.js - Review Details screen
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from './styles/global';

export default function ReviewDetails({ route, navigation }) {

    // VER 4 and 5 :
    // Every component defined in stack navigator gets the navigation prop by default.
    const pressHandler = () => {
        navigation.goBack();
    }

    return(
        <View style={globalStyles.container}>
            <Text>Review Details Screen</Text>
        {/* First practice with navigation. No longer needed in App but code left for learning purposes.
            <Button title='back to home screen' onPress={pressHandler}/> */ }
        {/* VER 4:}
            <Text>{ navigation.getParam('title') }</Text>  */}
        {/* VER 5: */}
            <Text style={globalStyles.container}>{ route.params.title }</Text>  
            <Text style={globalStyles.container}>{ route.params.body }</Text>
            <Text style={globalStyles.container}>{ route.params.rating }</Text>
        </View>
    )
}

