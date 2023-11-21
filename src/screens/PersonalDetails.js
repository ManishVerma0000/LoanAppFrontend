import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
import Toast from 'react-native-toast-message';
export default function PersonalDetails(props) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState('')
    const [Maritail, setMaritail] = useState("")
    const options = ['Select', 'Unmarried', 'Married'];


    const [dob, setdob] = useState('')
    const [ready, setReady] = useState(false)

    const handlePickerChange = (itemValue) => {
        setMaritail(itemValue);
    };
    const submitdetails = async () => {
        const data = {
            Email: email,
            Name: name,
            MaritialStatus: Maritail,
            DOB: dob,
            PhoneNumber: phone
        }
        await axios.post('http://10.81.48.236:7000/api/personaldetails', data).then(async (data) => {
            Toast.show({
                type: 'success',
                text1: 'error occurs',

            });
            props.navigation.navigate("Upload")

        }).catch((err) => {
            console.log(err)
            Toast.show({
                type: 'error',
                text1: 'error occurs',

            });

        })
        if (ready == true) {
            props.navigation.navigate("Upload")
        }

    }
    return (
        <View>
            <Toast />
            <View style={styles.topcontainer}>
                <Image style={styles.Imagestyle} source={require("../../assets/next.png")}></Image>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Home Loan Application </Text>
                <Image style={styles.Imagestyle} source={require("../../assets/g10.png")}></Image>
            </View>


            <View >
                <Text style={styles.PersonalDetails}>
                    Personal Details
                </Text>

            </View>
            <View>
                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontSize: 17, fontWeight: "600" }}>Name According To legal Document</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="enter the Name"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(text) => {

                            setName(text)
                        }}
                    />
                </View>
            </View>
            <View>
                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontSize: 17, fontWeight: "600" }}>Date Of Birth</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="enter the Birth"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(text) => {
                            setdob(text)
                        }}
                    />
                </View>
            </View>
            <View>
                <Text style={{ marginLeft: 30, color: "black", fontWeight: "600", fontSize: 17, borderColor: 'blue' }}>Marital Status</Text>
                <View style={styles.emailinputtag1}>
                    <Picker
                        selectedValue={Maritail}
                        onValueChange={handlePickerChange}
                        style={styles.pickerdiv}
                    >
                        {options.map((option) => (
                            <Picker.Item key={option} label={option} value={option} onChange={(text) => {
                                console.log(text)

                            }} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View>
                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontSize: 17, fontWeight: "600" }}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="enter the Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                    />
                </View>


            </View>

            <View>


                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontSize: 17, fontWeight: "600" }}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter the Phone Number"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(text) => {

                            setPhone(text)
                        }}
                    />
                </View>
            </View>

            <View style={styles.passwordbtn}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    submitdetails()
                }}>
                    <Text style={styles.buttonText}
                    >Click Me</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    picker: {
        borderWidth: 5,
        borderColor: 'blue'
    },
    pickerdiv: {
        width: 300,
        height: 50,
        borderWidth: 3,
        borderColor: 'gray',
        borderRadius: 5,

    },
    emailinputtag1: {
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        width: 300,
        marginLeft: 30,
    },
    Imagestyle: {
        height: 50,
        width: 50,
    },
    register: {
        color: "#5045E6"
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 12,
        width: 281,
        height: 45,
        backgroundColor: "#5045E6",
        margin: 10

    },
    passwordbtn: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },

    innertext: {
        color: "#5F5F5F"
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 10
    },
    topcontainer: {
        display: "flex",

        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: "row",
    },
    PersonalDetails: {
        color: "blue",
        margin: 10,
        fontSize: 17,
        fontWeight: "bold"
    },
    emailinputtag: {
        color: "#5045E6",
        marginLeft: 30,
        marginBottom: 20
    },
    textheadsection: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        lineHeight: "21.13px",
        fontWeight: '500'
    },
})
