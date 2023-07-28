import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HomePage from './src/screens/HomePage';
import HomePage2 from './src/screens/Homepage2';
import HomePage3 from './src/screens/HomePage3';
import Loginpage from './src/screens/LoginPage';
import StepOne from './src/screens/Stepone';
import Passworcreate from './src/screens/Passwordcreate';
import Success from './src/screens/Success';
import Card from './src/screens/Card';
import loanApplication from './src/screens/loanApplication';

// import OTP from './src/screens/otp';
import Otp from './src/screens/otp';
import PersonalDetails from './src/screens/PersonalDetails';
import * as Font from 'expo-font';
export default function App() {


  return (
    <View style={styles.container}>
      {/* <Card /> */}
      <loanApplication />

      {/* <Success /> */}
      {/* <PersonalDetails /> */}
      {/* <Otp /> */}
      {/* <Passworcreate /> */}
      {/* <StepOne /> */}
      {/* <Loginpage /> */}
      {/* <HomePage3 /> */}
      {/* 
      <HomePage2 /> */}
      {/* <HomePage /> */}
      <StatusBar style="auto" />
    </View>
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
