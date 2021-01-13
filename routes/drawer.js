/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: drawer.js - Contains Drawer navigation, version 4 and version 5
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

// VER 4: import { createDrawerNavigator } from 'react-navigation-drawer';
// VER 4: import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './aboutStack';
import HomeStack from './homestack';
import Home from '../screens/home';
import About from '../screens/about';

/*VER 4

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    }
});

// RootDrawerNavigator gets wrapped with an AppContainer to pass to App.js

export default createAppContainer(RootDrawerNavigator);

*/

// VER 5

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
  
 