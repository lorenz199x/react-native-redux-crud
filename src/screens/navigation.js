import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoadingScreen from './LoadingScreen'
import HomeScreen from './home'
import NewQuoteScreen from './NewQuote'

// const AppNavigator = createStackNavigator({
//     LoadingScreen: LoadingScreen,
//     HomeScreen: HomeScreen,
//     NewQuoteScreen: NewQuoteScreen

// }, {
//     headerMode: 'none',
//     defaultNavigationOptions: {
//         gesturesEnabled: false
//     }
// })

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Home`,
    }),
  },
  NewQuote: {
    screen: NewQuoteScreen,
    navigationOptions: ({ navigation }) => ({
      title: `New Quote`,
    }),
  }
});

const AppNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack
  },
  { initialRouteName: 'Loading' }
);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render
export default AppContainer;