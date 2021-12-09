import react from "react"

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import { LogBox } from "react-native";

// screens
import LoginScreen from './app/screens/Login'
import GameScreen from './app/screens/Game'

// console.ignoredYellowBox = ["Setting a timer"]
// this is deprecated 

LogBox.ignoreLogs(["Setting a timer"]); // ignore specific logs


const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Game: {
    screen: GameScreen
  },
  initialRouteName: "Login"
});


const AppContainer = createAppContainer(RootStack)

export default AppContainer;

