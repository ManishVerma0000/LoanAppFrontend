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
import DocumentUpload from './src/screens/DocumnetUpload';
import Card from './src/screens/Card';
import { TotalLoan } from './src/screens/TotalLoan';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Otp from './src/screens/Otp';
import PersonalDetails from './src/screens/PersonalDetails';
import HomaLoanApplication from './src/screens/HomeLoanApplication';
import TotalAmount from './src/screens/totalAmount';
import DashBoard from './src/screens/DashBoard';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Password">
          <Stack.Screen name="TotalLoan" component={TotalLoan} />
          <Stack.Screen name="DashBoard" component={DashBoard} />
          <Stack.Screen name="Amount" component={TotalAmount} />
          <Stack.Screen name="Application" component={HomaLoanApplication} />
          <Stack.Screen name="Upload" component={DocumentUpload} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Home2" component={HomePage2} />
          <Stack.Screen name="Home3" component={HomePage3} />
          <Stack.Screen name="otp" component={Otp} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="personaldetails" component={PersonalDetails} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="Password" component={Passworcreate} />
          <Stack.Screen name="Login" component={Loginpage} />
          <Stack.Screen name="Register" component={StepOne} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
