/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: home.js - Home screen
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import React , { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal,
            TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { Icon } from 'react-native-elements';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    
    // VER 4 and 5:
    // Every component defined in stack navigator gets the navigation prop by default.
    //pressHandler function used for action when button is pressed by user.
    //updated branch default
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Gotta Catch Them All (again)', rating: 3, body: 'lorem ipsum', key: '2'},
        { title: 'Not So "Final" Fantasy', rating: 2, body: 'lorem ipsum', key: '3'},
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return[review, ...currentReviews];
        })
        setModalOpen(false);
    };
    
    return(
        <View style={globalStyles.container}>
        {/* First practice with navigation. No longer needed in App but code left for learning purposes.
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to review details page' onPress={pressHandler}/>   */}
            
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <View>
                        <Icon
                            name= 'close'
                            size= {24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                         </View>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            
            <View>
                <Icon
                    name= 'add'
                    size= {24}
                    style={styles.modalToggle}
                    onPress={() => setModalOpen(true)}
                />
            </View>
            

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

const styles = StyleSheet.create ({
    modalContent:{
        flex: 1,
    },
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,
    }
});