/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: App.js 
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import * as Font from 'expo-font';
// import {AppLoading} from 'expo';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
// "Navigator" title here can be any word we want because we are importing the default function from homestack.js. 
//   "Navigator" just makes logical sense in this case.
import Navigator from './routes/homestack';

// const getFonts = () => Font.loadAsync({
//     'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
//     'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf')
//   });



export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   if(fontsLoaded){
//     return(
//       <Home />
//     );
//  } else {
//     return(
//     <AppLoading
//       startAsync={getFonts}
//       onFinish={() => setFontsLoaded(true)}
//     />
//     )
// }
  return(
    <Home />
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 24
  }
});