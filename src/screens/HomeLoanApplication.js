import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function HomeLoanApplication(props) {
  const [price, setPrice] = useState("5000000");
  const [isChecked, setIsChecked] = useState(false);
  const [time, setTime] = useState("2");
  const [installements, setInstallement] = useState("8");

  const subtractPrice = () => {
    setPrice((parseInt(price) - 10000).toString());
  };

  const additionPrice = () => {
    setPrice((parseInt(price) + 10000).toString());
  };

  const additionInstallment = () => {
    setInstallement((parseInt(installements) + 1).toString());
  };

  const subtractInstallment = () => {
    setInstallement((parseInt(installements) - 1).toString());
  };

  const decreaseTime = () => {
    setTime((parseInt(time) - 1).toString());
  };

  const increaseTime = () => {
    setTime((parseInt(time) + 1).toString());
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const data = {
    installements: installements,
    time: time,
    email: "manishverma88180@gmail.com",
    price: price
  };

  const sendToTotalAmountPage = () => {
    // You can use this function to send data to the total amount page.
    props.navigation.navigate("personaldetails")
    // axios.post("http://192.168.197.169:7000/api/totalloan", data, {
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     }
    // }).then((result) => {
    //     Toast.show({
    //         type: 'success',
    //         text1: 'your application has been submitted'
    //     });
    //     props.navigation.navigate("personaldetails")

    // }).catch((err) => {
    //     Toast.show({
    //         type: 'error',
    //         text1: 'please enter the details carefully'
    //     });
    //     props.navigation.navigate("Application")

    // })
  };

  return (
    <ScrollView style={styles.container}>
      <Toast />
      <View style={styles.header}>
        {/* <Image source={require('../../assets/leftarrow.png')} style={styles.arrowIcon} /> */}
        <Text style={styles.headerText}>Home Loan Application</Text>
        <Image source={require('../../assets/face.png')} style={styles.faceIcon} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>I would Like to Borrow</Text>
          <View style={styles.twoImages}>
            <TouchableOpacity onPress={subtractPrice}>
              <Text style={styles.icon}>-</Text>
            </TouchableOpacity>
            <View style={styles.amountInputContainer}>
              <Image source={require('../../assets/rupees.png')} style={styles.currencyIcon} />
              <TextInput
                style={styles.input}
                value={price}
                onChangeText={text => setPrice(text)}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity onPress={additionPrice}>
              <Text style={styles.icon2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>For A time Period of</Text>
          <View style={styles.twoImages}>
            <TouchableOpacity onPress={decreaseTime}>
              <Text style={styles.icon}>-</Text>
            </TouchableOpacity>
            <View style={styles.amountInputContainer}>
              <Image source={require('../../assets/Timer.png')} style={styles.currencyIcon} />
              <TextInput
                style={styles.input}
                value={time}
                onChangeText={text => setTime(text)}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity onPress={increaseTime}>
              <Text style={styles.icon2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>No. of Installments</Text>
          <View style={styles.twoImages}>
            <TouchableOpacity onPress={subtractInstallment}>
              <Text style={styles.icon}>-</Text>
            </TouchableOpacity>
            <View style={styles.amountInputContainer}>
              <Image source={require('../../assets/Hash.png')} style={styles.currencyIcon} />
              <TextInput
                style={styles.input}
                value={installements}
                onChangeText={text => setInstallement(text)}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity onPress={additionInstallment}>
              <Text style={styles.icon2}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleCheckboxToggle}>
          {isChecked ? (
            <Image source={require("../../assets/Vector.png")} style={styles.checkboxChecked} />
          ) : (
            <Image source={require("../../assets/Vector.png")} style={styles.checkboxUnchecked} />
          )}
        </TouchableOpacity>
        <Text style={styles.label}>Agree to Terms and Conditions</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={sendToTotalAmountPage} />
      </View>
      <View style={styles.additionalInfo}>
        <Text style={styles.infoText}>We are happy to inform you that we</Text>
        <Text style={styles.infoText}>offer an interest rate of only 9%</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
  headerText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 17,
  },
  faceIcon: {
    width: 30,
    height: 30,
  },
  formContainer: {
    marginTop: 50,
  },
  formSection: {
    marginVertical: 20,
  },
  formLabel: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  twoImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    fontWeight: 'bold',
    fontSize: 50,
    color: 'blue',
    // marginRight: 20,
  },
  icon2 : {
    width: 40,
    fontWeight: 'bold',
    fontSize: 50,
    color: 'blue',
    marginLeft : 20,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyIcon: {
    margin: 10,
  },
  input: {
    width: 150,
    borderBottomWidth: 2,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  checkboxChecked: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  checkboxUnchecked: {
    width: 30,
    height: 30,
    // backgroundColor: 'darkblue',
    overflow: 'hidden',
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // padding : 10,
    borderRadius: 5,
    alignSelf: 'center',
    margin: 20,
  },
  additionalInfo: {
    // marginLeft: 50,
  },
  infoText: {
    fontSize: 15,
    textAlign : "center"
  },
});
