import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import Toast from 'react-native-toast-message';
import axios from "axios";

export default function DocumentUpload(props) {
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

    const pickDocument = async (stateSetter) => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});
            if (result.type === "success") {
                stateSetter(result);
            }
        } catch (error) {
            console.log("Error occurred:", error);
        }
    }

    const uploadDocument = async () => {
        // const formData = new FormData();
        props.navigation.navigate("Success");
        if (fileuriforAddhar.uri) {
            // formData.append("Address", address);
            // formData.append("information", employment);

            // formData.append('aadharCard', {
            //     uri: fileuriforAddhar.uri,
            //     type: fileuriforAddhar.mimeType,
            //     name: fileuriforAddhar.name,
            // });
            // formData.append("form16", {
            //     uri: fileurifor16.uri,
            //     type: fileurifor16.mimeType,
            //     name: fileurifor16.name,
            // });

            // formData.append("panCard", {
            //     uri: panccard.uri,
            //     type: panccard.mimeType,
            //     name: panccard.name,
            // });

            try {
                // await axios.post("http://192.168.197.169:7000/api/document", formData, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     }
                // });

                // Toast.show({
                //     type: 'success',
                //     text1: 'Uploaded successfully',
                //     position: 'top',
                //     visibilityTime: 2000,
                // });

                props.navigation.navigate("Success");
            } catch (err) {
                Toast.show({
                    type: 'error',
                    text1: 'Upload failed',
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

                props.navigation.navigate("Upload");
            }
        }
    }

    return (
        <View style={styles.container}>
            <Toast />
            <View style={styles.topcontainer}>
                {/* <Image style={styles.Imagestyle} source={require("../../assets/next.png")} /> */}
                <Text style={styles.headerText}>Home Loan Application</Text>
                <Image style={styles.Imagestyle} source={require("../../assets/g10.png")} />
            </View>
            <View>
                <Text style={styles.PersonalDetails}>Documentation</Text>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setaddress(text)}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Employment Information</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Employment Information"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmployementinformation(text)}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Upload Aadhar Card</Text>
                <TouchableOpacity onPress={() => pickDocument(setfileUriForAddhar)}>
                    <Text>Select File</Text>
                </TouchableOpacity>
                {fileuriforAddhar.name && <Text style={styles.fileName}>{fileuriforAddhar.name}</Text>}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Upload PAN Card</Text>
                <TouchableOpacity onPress={() => pickDocument(setFileUriForPanCard)}>
                    <Text>Select File</Text>
                </TouchableOpacity>
                {panccard.name && <Text style={styles.fileName}>{panccard.name}</Text>}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Upload FORM 16</Text>
                <TouchableOpacity onPress={() => pickDocument(setFileUriForForm16)}>
                    <Text>Select File</Text>
                </TouchableOpacity>
                {fileurifor16.name && <Text style={styles.fileName}>{fileurifor16.name}</Text>}
            </View>
            <View style={styles.submitButton}>
                <TouchableOpacity style={styles.button} onPress={uploadDocument}>
                    <Text style={styles.buttonText}>Upload Document</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    topcontainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: 'white'
    },
    Imagestyle: {
        height: 44,
        width: 44,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    PersonalDetails: {
        color: "blue",
        margin: 10,
        fontSize: 17,
        fontWeight: "bold",
    },
    formGroup: {
        // marginLeft: 30,
        margin: 40,
        marginBottom: 20,
        // borderWidth: 1,
        borderRadius: 8,
    },
    label: {
        marginLeft : 10,
        marginBottom: 10,
        color: "black",
        fontWeight: "600",
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 10,
    },
    documentUpload: {
        marginLeft: 30,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        marginRight: 50,
    },
    fileName: {
        color: "blue",
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    submitButton: {
        display: "flex",
        color: 'white',
        justifyContent: 'center',
        alignItems: "center",
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
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
