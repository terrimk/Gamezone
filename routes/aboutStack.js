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
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

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

const HomeStack = createStackNavigator();

export default function Navigator () {
    return (
    <NavigationContainer>
        <HomeStack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} >
                <HomeStack.Screen name="GameZone" component={Home} />
                <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
        </HomeStack.Navigator>
    </NavigationContainer>
    );
  }
  
 