import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid, DatePickerAndroid } from "react-native";
import { Picker } from '@react-native-picker/picker';
// import DocumentPicker from 'react-native-document-picker';
import * as DocumentPicker from 'expo-document-picker';
import Toast from 'react-native-toast-message';
import Footer from "./Footer";
import axios from "axios";

export default function DocumentUpload() {

    const formData = new FormData();

    const [fileurifor16, setFileUriForForm16] = useState(null);
    const [panccard, setFileUriForPanCard] = useState(null);
    const [address, setaddress] = useState('');
    const [fileuriforAddhar, setfileUriForAddhar] = useState(null);
    const [employment, setEmployementinformation] = useState('');

    const pickDocumentforForm16 = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});
            if (result.type === "success") {
                console.log(result);
                setFileUriForForm16(result);
            } else {
                console.log("Document picker was canceled.");
            }
        } catch (err) {
            console.log("Error while picking document:", err);
        }
    }

    const pickDocumentforpancard = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});
            if (result.type === "success") {
                console.log(result);
                setFileUriForPanCard(result);
            } else {
                console.log("Document picker was canceled.");
            }
        } catch (err) {
            console.log("Error while picking document:", err);
        }
    }

    const pickDocumentforAdddhar = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});
            if (result.type === "success") {
                console.log(result);
                setfileUriForAddhar(result);
            } else {
                console.log("Document picker was canceled.");
            }
        } catch (err) {
            console.log("Error while picking document:", err);
        }
    };

    const uplaoddocument = () => {
        formData.set("panCard", panccard.file);
        formData.set("aadharCard", fileuriforAddhar.file);
        formData.set('form16', fileurifor16.file);
        formData.append("Address", address);
        formData.append("information", employment);
        axios.post("http://localhost:7000/api/document", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((data) => {
                console.log(data);
                Toast.show({
                    type: 'success',
                    text1: 'Uploaded success',
                    position: 'bottom',
                    visibilityTime: 2000,
                });


            })
            .catch((err) => {
                console.log(err);
                Toast.show({
                    type: 'error',
                    text1: 'login not success',
                    position: 'top',
                    visibilityTime: 2000,
                });
            });
    }


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
                        onChangeText={(text) => {
                            setaddress(text)
                        }}
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
                        onChangeText={(text) => {
                            setEmployementinformation(text)
                        }}
                    />
                </View>


            </View>
            <View>
            </View>
            <Text style={{ marginLeft: 30, marginBottom: 10, color: "black", fontWeight: "600" }}>Uplaod Addhar Card</Text>
            <View style={styles.emailinputtag1}>

                <View>
                    <TouchableOpacity onPress={pickDocumentforAdddhar} >
                        <Text>Select File</Text>
                    </TouchableOpacity>
                    {/* {fileUri && <Text>Selected File: {fileUri}</Text>} */}
                </View>
            </View>


            <Text style={{ marginLeft: 30, marginBottom: 10, color: "black", fontWeight: "600" }}>Uplaod Pan Card</Text>
            <View style={styles.emailinputtag1}>

                <View>
                    <TouchableOpacity onPress={pickDocumentforpancard}>
                        <Text>Select File</Text>
                    </TouchableOpacity>

                    {/* {fileUri && <Text>Selected File: {fileUri}</Text>} */}
                </View>
            </View>

            <Text style={{ marginLeft: 30, marginBottom: 10, color: "black", fontWeight: "600" }}>Uplaod FORM 16</Text>
            <View style={styles.emailinputtag1}>

                <View>
                    <TouchableOpacity onPress={pickDocumentforForm16}>
                        <Text>Select File</Text>
                    </TouchableOpacity>
                    {/* {fileUri && <Text>Selected File: {fixleUri}</Text>} */}
                </View>
            </View>

            <View style={styles.passwordbtn}>
                <TouchableOpacity style={styles.button} onPress={uplaoddocument}>
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
