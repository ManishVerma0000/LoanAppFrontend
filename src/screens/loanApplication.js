import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity, ToastAndroid } from "react-native";
import Footer from "./Footer";




export default function LoanApplication() {
    return (
        <View style={styles.topcontainer} >
            <View style={styles.innercontainer}>
                <Text>
                    this is the text
                </Text>


            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    topcontainer: {
        flex: 1
    }
})