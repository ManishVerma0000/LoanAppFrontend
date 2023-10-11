import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';

const OtpScreen = (props) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChangeOtp = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move focus to the next input or submit OTP when all digits are entered
    if (text !== '' && index < 3) {
      otpInputsRef[index + 1].focus();
    } else if (index === 3 && text !== '') {
      handleLogin();
    }
  };

  const handleLogin = () => {
    props.navigation.navigate("DashBoard")
    // Implement OTP verification and login logic here
    // You can use otp.join('') to get the complete OTP
  };

  const otpInputsRef = [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            onChangeText={(text) => handleChangeOtp(text, index)}
            value={digit}
            maxLength={1}
            keyboardType="numeric"
            ref={(ref) => (otpInputsRef[index] = ref)}
            onFocus={() => setOtp(['', '', '', ''])} // Clear input on focus
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => otpInputsRef[0].focus()} // Focus on the first input
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding : 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default OtpScreen;
