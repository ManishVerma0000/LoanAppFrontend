import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid, DatePickerAndroid } from "react-native";
import { Picker } from '@react-native-picker/picker';



export default function PersonalDetails() {
    const [selectedOption, setSelectedOption] = useState('Male');

    const options = ['Select', 'Unmarried', 'Married'];

    const handleChangeOption = (option) => {
        setSelectedOption(option);
    };


    return (
        <View>
            <View style={styles.topcontainer}>
                <Image style={styles.Imagestyle} source={require("../../assets/next.png")}></Image>
                <Text style={{ fontWeight: "bold" }}>Home Loan Application </Text>
                <Image style={styles.Imagestyle} source={require("../../assets/g10.png")}></Image>
            </View>


            <View >
                <Text style={styles.PersonalDetails}>
                    Personal Details
                </Text>

            </View>

            <View>


                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontWeight: "600" }}>Name According To legal Document</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="enter the Name"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>


            </View>
            <View>


                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontWeight: "600" }}>Date Of Birth</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="enter the Birth"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>


            </View>
            <View>


                <View style={styles.emailinputtag1}>
                    <Text style={{ marginBottom: 10, color: "black", fontWeight: "600" }}>Marital Status</Text>
                    <Picker
                        selectedValue={selectedOption}
                        onValueChange={handleChangeOption}
                        style={styles.picker}
                    >
                        {options.map((option) => (
                            <Picker.Item key={option} label={option} value={option} />
                        ))}
                    </Picker>

                </View>
            </View>
            <View>
                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontWeight: "600" }}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="enter the Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>


            </View>

            <View>


                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontWeight: "600" }}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter the Phone Number"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
            </View>

            <View style={styles.passwordbtn}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                    >Click Me</Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}
const styles = StyleSheet.create({
    emailinputtag1: {
        color: "#5045E6",
        marginLeft: 30,
        marginBottom: 20,
        borderRadius: 5,
        borderColor: "black"
    },
    Imagestyle: {
        height: 44,
        width: 44,

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
    },
    topcontainer: {
        display: "flex",

        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    PersonalDetails: {
        color: "blue",
        margin: 10
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
