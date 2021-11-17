import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './Screens/SignIn';

export default function App() {
  const MainNavigator = createStackNavigator();

  return(
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="SignIn"  >
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="SignIn" component={SignIn} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent:'center',
  }
});
   

