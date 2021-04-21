import React from 'react';
import { StyleSheet } from 'react-native';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MovieStack = () =>{
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#f4b71e'
      }
    }}>
    
    <Stack.Screen name = "ScreenOne" component={ScreenOne} options={{
      title: 'Movie Browser',
    }}/>
    <Stack.Screen name = "ScreenTwo" component={ScreenTwo} options={{
      title: 'Movie Browser',
    }}/>
    <Stack.Screen name = "ScreenThree" component={ScreenThree} options={{
      title: 'Movie Browser',
    }}/>
  </Stack.Navigator> 
  );
};

const App = props => {
  return (
    <NavigationContainer>
      <MovieStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
