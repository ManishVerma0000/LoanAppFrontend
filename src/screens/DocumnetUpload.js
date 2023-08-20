import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid, DatePickerAndroid } from "react-native";
import { Picker } from '@react-native-picker/picker';
// import DocumentPicker from 'react-native-document-picker';
import { useFonts } from 'expo-font';

import * as DocumentPicker from 'expo-document-picker';
import Toast from 'react-native-toast-message';
import Footer from "./Footer";
import axios from "axios";

export default function DocumentUpload() {
    const formData = new FormData()

    const [fileurifor16, setFileUriForForm16] = useState({
        uri: "",
        type: "",
        name: ""
    });
    const [panccard, setFileUriForPanCard] = useState({
        uri: "",
        type: "",
        name: ""
    });
    const [address, setaddress] = useState('');
    const [fileuriforAddhar, setfileUriForAddhar] = useState({
        uri: "",
        type: "",
        name: ""
    });
    const [employment, setEmployementinformation] = useState('');
    const [form16name, setForm16name] = useState('')
    const [addharname, setAadharname] = useState("")
    const [panCard, setPancardName] = useState()





    const pickDocumentforForm16 = async (props) => {

        try {

            const result = await DocumentPicker.getDocumentAsync({});
            console.log(result.type)
            if (result.type = "success") {
                console.log('hey')
                console.log(result)
                setFileUriForForm16(result)
            }
        } catch (error) {
            console.log("error occurs")
        }

    }

    const pickDocumentforpancard = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});
            console.log(result.type)
            if (result.type = "success") {
                console.log('hey')
                console.log(result)
                setFileUriForPanCard(result)
            }
        } catch (error) {
            console.log("error occurs")
        }

    }

    const pickDocumentforAdddhar = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});
            console.log(result.type)
            if (result.type = "success") {
                console.log('hey')
                console.log(result)
                setfileUriForAddhar(result)
            }
        } catch (error) {
            console.log("occurs occurs")
        }
    };

    const uplaoddocument = async () => {

        if (fileuriforAddhar) {
            formData.append("Address", address)
            formData.append("information", employment)

            formData.append('aadharCard', {
                uri: fileuriforAddhar.uri,
                type: fileuriforAddhar.mimeType,
                name: fileuriforAddhar.name,
            });
            formData.append("form16", {
                uri: fileurifor16.uri,
                type: fileurifor16.mimeType,
                name: fileurifor16.name,
            })

            formData.append("panCard", {
                uri: panccard.uri,
                type: panccard.mimeType,
                name: panccard.name,
            })
            await axios.post("http://192.168.197.169:7000/api/document", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((result) => {
                Toast.show({
                    type: 'success',
                    text1: 'Uploaded success',
                    position: 'top',
                    visibilityTime: 2000,
                });
                //Success
                props.navigation.navigate("Success")

            }).catch((err) => {

                Toast.show({
                    type: 'error',
                    text1: 'Uploaded failed',
                    position: 'top',
                    topOffset: 60,
                    visibilityTime: 2000,
                    style: {
                        backgroundColor: 'red',
                        left: 100,
                        top: 10,
                        borderRadius: 8,
                        paddingHorizontal: 10
                    },
                });
                props.navigation.navigate("Upload")

            })
        }
    }
    return (
        <View>
            <Toast />
            <View style={styles.topcontainer}>
                <Image style={styles.Imagestyle} source={require("../../assets/next.png")}></Image>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Home Loan Application </Text>
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

                </View>
                {
                    addharname ? <Text style={{
                        color: "blue", marginTop: 20, fontSize: 16,
                        fontWeight: 'bold',
                    }}>{addharname}</Text> : null
                }

            </View>
            <Text style={{ marginLeft: 30, marginBottom: 10, color: "black", fontWeight: "600" }}>Uplaod Pan Card</Text>
            <View style={styles.emailinputtag1}>

                <View>
                    <TouchableOpacity onPress={pickDocumentforpancard}>
                        <Text>Select File</Text>
                    </TouchableOpacity>

                </View>
                {
                    panCard ? <Text style={{
                        color: "blue", marginTop: 20, fontSize: 16,
                        fontWeight: 'bold',
                    }}>{panCard}</Text> : null
                }
            </View>

            <Text style={{ marginLeft: 30, marginBottom: 10, color: "black", fontWeight: "600" }}>Uplaod FORM 16</Text>
            <View style={styles.emailinputtag1}>

                <View>
                    <TouchableOpacity onPress={pickDocumentforForm16}>
                        <Text>Select File</Text>
                    </TouchableOpacity>
                    {/* {fileUri && <Text>Selected File: {fixleUri}</Text>} */}
                </View>
                {
                    form16name ? <Text style={{
                        color: "blue", marginTop: 20, fontSize: 16,
                        fontWeight: 'bold',
                    }}>{form16name}</Text> : null
                }

            </View>
            {/* //form16name */}
            <View style={styles.passwordbtn}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    uplaoddocument(formData)
                }}>
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
        borderRadius: 10
    },
    topcontainer: {
        display: "flex",

        justifyContent: "space-between",
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