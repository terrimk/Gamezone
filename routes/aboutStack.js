/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: aboutStack.js - Contains Navigation stack information for the About page, migrating to React Navigation version 5
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

// VER 4: import { createStackNavigator } from 'react-navigation-stack';
// VER 4: import { createAppContainer } from 'react-navigation';
// NavigationContainer is react-navigation ver5 - replaces createAppContainer
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';

/*VER 4
// screens is an object variable that stores objects that point to the various screen files.
//        It works by importing the component above and then pointing to it.
//        The object names in the variable (i.e. Home, ReviewDetails) can be any
//        name. It just makes sense to call it the same name as the imported Components.

const screens = {
    About: {
        screen: About,
        navigationOptions: {
             title: 'About GameZone',
        }
    },
}

// createStackNavigator is the function imported from react-navigation-stack above
//    - pass an object into this function that will register which files the 
//      navigation will point to. In this case, that object is defined above named
//      'screens'.

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyles: { backgroundColor: '#eee', height: 60 }
  }
});

// function to pass info about stack to App.js. Stack is ordered top to bottom.
export default AboutStack;
*/

// VER 5

const AboutStack = createStackNavigator();

export default function aboutNav () {
    return (
        <AboutStack.Navigator 
            initialRouteName="Home"
              screenOptions={{
              //  headerTitle:() => <Header />, // use custom component for header
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }} 
          >
                <AboutStack.Screen 
                    name="About" 
                    component={About} 
                    options= {({ navigation }) => {
                        return {
                          headerTitle: () => <Header navigation={navigation} />,
                        }
                    }}  
                />
        </AboutStack.Navigator>
    );
  }
  
 