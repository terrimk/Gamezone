import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

// screens is a variable that stores objects that point to the various screen files.
//         It works by importing the component above and then pointing to it.
//         The object names in the variable (i.e. Home, ReviewDetails) can be any
//         name. It just makes sense to call it the same name as the imported Components.
const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator();