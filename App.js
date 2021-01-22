import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreView} from 'react-native';
import React from 'react';

import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator';



export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreView style={{flex:1}}>
    <AppContainer/>
    </SafeAreView>
    </SafeAreaProvider>
 
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab:{screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);