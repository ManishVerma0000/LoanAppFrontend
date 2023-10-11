import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export default function PersonalDetails(props) {
  const [selectedOption, setSelectedOption] = useState('Select');
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');
  const [Maritail, setMaritail] = useState("");
  const options = ['Select', 'Unmarried', 'Married'];
  const [dob, setdob] = useState('');

  const handlePickerChange = (itemValue) => {
    setSelectedOption(itemValue);
    setMaritail(itemValue);
  };

  const submitDetails = async () => {
    const data = {
      Email: email,
      Name: name,
      MaritialStatus: Maritail,
      DOB: dob,
      PhoneNumber: phone,
    };
    try {
    //   await axios.post('http://192.168.197.169:7000/api/personaldetails', data, {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   Toast.show({
    //     type: 'success',
    //     text1: 'Details saved successfully',
    //   });

      props.navigation.navigate('Upload');
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error occurred',
      });

      props.navigation.navigate('personaldetails');
    }
  };

  return (
    <View style={styles.container}>
      <Toast />

      <View style={styles.topContainer}>
        {/* <Image style={styles.imageStyle} source={require("../../assets/next.png")} /> */}
        <Text style={styles.headerText}>Home Loan Application</Text>
        <Image style={styles.imageStyle} source={require("../../assets/g10.png")} />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.personalDetailsText}>Personal Details</Text>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Name According to Legal Document</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Name"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Birth"
          keyboardType="email-address"
          autoCapitalize="none"
          type = "date"
          onChangeText={text => setdob(text)}
        />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Marital Status</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={handlePickerChange}
            style={styles.picker}
          >
            {options.map(opt => {
                return (
                    <Picker.Item key={opt} label={opt} value={opt} />
                )
            })

            }
            {/* {options.map(option => (
              <Picker.Item key={option} label={option} value={option} />
            )} */}
          </Picker>
        </View>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Phone Number"
          keyboardType="phone-pad"
          autoCapitalize="none"
          onChangeText={text => setPhone(text)}
        />
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button} onPress={submitDetails}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "white"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  personalDetailsText: {
    color: "blue",
    margin: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  inputSection: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  inputLabel: {
    marginBottom: 10,
    color: "black",
    fontSize: 17,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 10,
  },
  pickerContainer: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    // marginLeft: 30,
  },
  picker: {
    height: 50,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 5,
  },
  buttonSection: {
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    width: 281,
    height: 45,
    backgroundColor: "#5045E6",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
