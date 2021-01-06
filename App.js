/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: App.js 
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';


export default function App() {
  return(
    <View style={styles.container}>
      <Text>GAMEZONE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 24
  }
});