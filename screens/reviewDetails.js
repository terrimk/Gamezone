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
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {

    // VER 4 and 5 :
    // Every component defined in stack navigator gets the navigation prop by default.
    const pressHandler = () => {
        navigation.goBack();
    }

    // Ver 5: "rating" variable looks assigned according to the rating value in the home.js file
    //         "route.params" is back of the react navigation version 5 package and allows access
    //          to objects across the various files
    const rating = route.params.rating;
  
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
                        {/* actual image file is defined in global.js inside an object  */}
                        <Image source={images.ratings[rating]} />  
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})
