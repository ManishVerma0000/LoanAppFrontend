import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomePage from './src/screens/HomePage';
import HomePage2 from './src/screens/Homepage2';
import HomePage3 from './src/screens/HomePage3';
import Loginpage from './src/screens/LoginPage';
import StepOne from './src/screens/Stepone';
import Passworcreate from './src/screens/Passwordcreate';
import Success from './src/screens/Success';
import Card from './src/screens/Card';
import LoanApplication from './src/screens/loanApplication';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Otp from './src/screens/Otp';
import PersonalDetails from './src/screens/PersonalDetails';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Home2" component={HomePage2} />
          <Stack.Screen name="Home3" component={HomePage3} />
          <Stack.Screen name="otp" component={Otp} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="personaldetails" component={PersonalDetails} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="LoanApplication" component={LoanApplication} />
          <Stack.Screen name="Password" component={Passworcreate} />
          <Stack.Screen name="Login" component={Loginpage} />
          <Stack.Screen name="Register" component={StepOne} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
