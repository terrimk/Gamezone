/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: App.js 
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
// "Navigator" title here can be any word we want because we are importing the default function from homestack.js. 
//   "Navigator" just makes logical sense in this case.
import Navigator from './routes/drawer';
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://fd1f795911204bebb5ee140c7d812acc@o512802.ingest.sentry.io/5613718",
});


export default function App() {
  return(
    //Drawer Navigator that has been migrated from React Navigation version 4 to version 5
    <Navigator />
  );
}


const styles = StyleSheet.create({
  container: {
      padding: 24
  }
});

