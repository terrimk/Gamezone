/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: reviewDetails.js - Review Details screen
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import { globalStyles, images } from './styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {

    // VER 4 and 5 :
    // Every component defined in stack navigator gets the navigation prop by default.
    const pressHandler = () => {
        navigation.goBack();
    }

    const rating = navigation.getParam('rating');

    return(
        <View style={globalStyles.container}>
              {/* First practice with navigation. No longer needed in App but code left for learning purposes.
            <Button title='back to home screen' onPress={pressHandler}/> */ }
        {/* VER 4:}
            <Text>{ navigation.getParam('title') }</Text>  */}
        {/* VER 5: */}
            <Card>
                <Text> { route.params.title } </Text>  
                <Text> { route.params.body } </Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                        <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{

    }
})
