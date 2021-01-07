import { createStackNavigator } from 'react-navigation-stack';
// createAppContainer was react-navigation version 4
// import { createAppContainer } from 'react-navigation';
// NavigationContainer is react-navigation ver5 - replaces createAppContainer
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

// VER 4
// screens is an object variable that stores objects that point to the various screen files.
//         It works by importing the component above and then pointing to it.
//         The object names in the variable (i.e. Home, ReviewDetails) can be any
//         name. It just makes sense to call it the same name as the imported Components.
// const screens = {
//     Home: {
//         screen: Home
//     },
//     ReviewDetails: {
//         screen: ReviewDetails
//     }
// }

// createStackNavigator is the function imported from react-navigation-stack above
//     - pass an object into this function that will register which files the 
//       navigation will point to. In this case, that object is defined above named
//       'screens'.
// const HomeStack = createStackNavigator(screens);

// function to pass info about stack to App.js. Stack is ordered top to bottom.
// createAppContainer is from react navigation version 4
// export default createAppContainer(HomeStack);

// VER 5

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'GAMEZONE' }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{ title: 'REVIEW DETAILS' }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
    return <NavigationContainer>{(HomeStack)}</NavigationContainer>;
  };