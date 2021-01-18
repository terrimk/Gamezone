/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: homestack.js - Contains Navigation stack information, migrating to React Navigation version 5
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

// VER 4: import { createStackNavigator } from 'react-navigation-stack';
// VER 4: import { createAppContainer } from 'react-navigation';
// NavigationContainer is react-navigation ver5 - replaces createAppContainer
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';



/*VER 4
// screens is an object variable that stores objects that point to the various screen files.
//        It works by importing the component above and then pointing to it.
//        The object names in the variable (i.e. Home, ReviewDetails) can be any
//        name. It just makes sense to call it the same name as the imported Components.
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
             title: 'GameZone',
             // ADDED DEFAULT BELOW headerStyles: { backgroundColor: '#eee' }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
             title: 'Review Details',
             //ADDED DEFAULT BELOW headerStyles: { backgroundColor: '#eee' }
        }
    }
}

// createStackNavigator is the function imported from react-navigation-stack above
//    - pass an object into this function that will register which files the 
//      navigation will point to. In this case, that object is defined above named
//      'screens'.
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyles: { backgroundColor: '#eee', height: 60 }
  }
});

// function to pass info about stack to App.js. Stack is ordered top to bottom.
export default createAppContainer(HomeStack);
*/

// VER 5

const HomeStack = createStackNavigator();

export default function Navigator () {
    return (
        <HomeStack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              //headerTitle:() => <Header />, // if placed here, also shows on Review Details page
              headerStyle: {
                height: 50,
                backgroundColor: 'pink',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} >
                <HomeStack.Screen 
                    name="GameZone" 
                    component={Home} 
                    //use custom component for header, pass in navigation and title for homepage
                    options= {({ navigation }) => {
                        return {
                          headerTitle: () => <Header navigation={navigation} title='The GameZone' />,
                        }
                    }}
                />
                <HomeStack.Screen 
                    name="ReviewDetails" 
                    component={ReviewDetails} 
                />
        </HomeStack.Navigator>
    );
  }
   