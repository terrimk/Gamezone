/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: global.js -stores global style info used in entire app
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
};