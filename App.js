import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/bookTransactionScreen'
import SearchScreen from './screens/searchScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const tabNavigator = createBottomNavigator({
  transaction:{
    screen:TransactionScreen
  },

  search:{
    screen:SearchScreen
  }
}) 

const AppContainer = createAppContainer(tabNavigator)