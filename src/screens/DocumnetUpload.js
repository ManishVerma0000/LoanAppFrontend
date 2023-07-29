import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid, DatePickerAndroid } from "react-native";
import { Picker } from '@react-native-picker/picker';
// import DocumentPicker from 'react-native-document-picker';
import * as DocumentPicker from 'expo-document-picker';
import Footer from "./Footer";



export default function DocumentUpload() {

    const [fileUri, setFileUri] = useState(null);


    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({

            });

            if (result.type === "success") {
                console.log(result);
                setFileUri(result.uri);
            } else {
                console.log("Document picker was canceled.");
            }
        } catch (err) {
            console.log("Error while picking document:", err);
        }
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
                    Documentation
                </Text>

            </View>

            <View>


                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontWeight: "600" }}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="enter the address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>


            </View>
            <View>


                <View style={styles.emailinputtag}>
                    <Text style={{ marginBottom: 10, color: "black", fontWeight: "600" }}>Employment Information</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Employment Information"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>


            </View>
            <View>
            </View>
            <Text style={{ marginLeft: 30, marginBottom: 10, color: "black", fontWeight: "600" }}>Uplaod Addhar Card</Text>
            <View style={styles.emailinputtag1}>

                <View>
                    <TouchableOpacity onPress={pickDocument}>
                        <Text>Select File</Text>
                    </TouchableOpacity>
                    {/* {fileUri && <Text>Selected File: {fileUri}</Text>} */}
                </View>
            </View>


            <Text style={{ marginLeft: 30, marginBottom: 10, color: "black", fontWeight: "600" }}>Uplaod Pan Card</Text>
            <View style={styles.emailinputtag1}>

                <View>
                    <TouchableOpacity onPress={pickDocument}>
                        <Text>Select File</Text>
                    </TouchableOpacity>

                    {/* {fileUri && <Text>Selected File: {fileUri}</Text>} */}
                </View>
            </View>

            <Text style={{ marginLeft: 30, marginBottom: 10, color: "black", fontWeight: "600" }}>Uplaod FORM 16</Text>
            <View style={styles.emailinputtag1}>

                <View>
                    <TouchableOpacity onPress={pickDocument}>
                        <Text>Select File</Text>
                    </TouchableOpacity>
                    {/* {fileUri && <Text>Selected File: {fixleUri}</Text>} */}
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

        marginLeft: 30,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        marginRight: 50
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
        marginBottom: 20,

        borderRadius: 8,
    },
    textheadsection: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        lineHeight: "21.13px",
        fontWeight: '500'
    },
})
