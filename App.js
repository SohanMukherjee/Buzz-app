import React, { Component } from 'react';
import {View} from 'react-native';
import { createAppContainer,} from 'react-navigation'; 
import { createBottomTabNavigator} from 'react-navigation-tabs'


import FbScreen from './screens/fb';
import InScreen from './screens/in';


export default class App extends Component {
  render() {
    return (
        <Appcontainer />
    )
  }
}

var tabContainer = createBottomTabNavigator({
 Facebook:{screen:FbScreen},
  Instagram:{screen:InScreen}
})
const Appcontainer = createAppContainer(tabContainer)
