import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'

export default function TotalAmount() {
    const [totalamount, setAmount] = useState('')
    const [installements, setinstallement] = useState('')
    const userdata = useSelector((state) => state.toatalAmountreducer)
    useEffect(() => {
        if (userdata) {
            setinstallement(userdata[0].installements)
            setAmount(userdata[0].data)
        }
    }, [])
    const functionnextpage = () => {
        props.navigation.navigate("Success")
    }
    return (
        <View>
            <View style={styles.container} >
                <View style={styles.uppersectionpart}>
                    <Image source={require('../../assets/one.png')}></Image>
                    <View style={styles.skipsection}>
                    </View>
                </View>
                <View>
                    <View style={styles.card}>
                        <View style={styles.content}>
                            <Text style={styles.title}>Total Amount</Text>
                            <Text style={styles.description}>{totalamount}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.card}>
                        <View style={styles.content}>
                            <Text style={styles.title}>Total installements</Text>
                            <Text style={styles.description}>{installements}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.uppersectionpart}>
                    <Image source={require('../../assets/g12.png')} style={{ height: 250, width: 200 }}></Image>
                    <View style={styles.skipsection}>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={functionnextpage}>
                        <Text style={styles.buttonText} >NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },

    uppersectionpart: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    button: {
        margin: 20,
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        margin: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: "blue"
    },
    description: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold"
    },

})