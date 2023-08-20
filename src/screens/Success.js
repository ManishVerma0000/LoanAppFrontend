import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, } from "react-native";
import Footer from "./Footer";



export default function Success(props) {

    const routetothenextpage = () => {
        props.navigation.navigate("Upload")
    }
    return (
        <View style={styles.container} >
            <View style={styles.containerfirst}>
                <View>
                    <Image source={require("../../assets/next.png")}></Image>
                </View>

                <Text style={{ marginTop: 15, color: "blue", fontWeight: "bold", fontSize: 18 }}>HOME LOAN APPLICATION</Text>

                <View>
                    <Image source={require("../../assets/face.png")}></Image>
                </View>
            </View>
            <View style={styles.containersecond}>
                <View style={styles.innercontainer}>
                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                            Hurray ! You Have successfully filled the form

                        </Text>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                            Sit back till our team completes  verification
                        </Text>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                            You will see a notification under notification tab
                        </Text>
                    </View>

                </View>
            </View>
            <View style={styles.containerthird}>
                <View >
                    <Button title="Go To Home" onPress={routetothenextpage}></Button>
                </View>
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    innercontainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    containerfirst: {

        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerfourth: {
        flex: 1,
        backgroundColor: "red",
        marginTop: 20
    },
    containersecond: {
        flex: 1,
        //  backgroundColor: "red"
    },
    containerthird: {


        flex: 1,
        marginTop: 60,
        // backgroundColor: "yellow",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center"
        padding: 30,
    }

})