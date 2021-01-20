/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: home.js - Home screen
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import React , { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {

    // VER 4 and 5:
    // Every component defined in stack navigator gets the navigation prop by default.
    //pressHandler function used for action when button is pressed by user.
    //updated branch default
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'Not So "Final" Fantasy', rating: 2, body: 'lorem ipsum', key: '3'},
    ]);
    
    return(
        <View style={globalStyles.container}>
        {/* First practice with navigation. No longer needed in App but code left for learning purposes.
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to review details page' onPress={pressHandler}/>   */}

            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

