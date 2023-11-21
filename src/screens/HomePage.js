import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
export default function HomePage(props) {
    const rendertothenextpage = () => {

        props.navigation.navigate("Home2")
    }
    const settothenextpage = () => {
        props.navigation.navigate("Home2")
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.uppersectionpart}>
                    <Image source={require('../../assets/one.png')}></Image>
                    <TouchableOpacity style={styles.skipsection}>
                        <Text style={styles.textforskip} onPress={settothenextpage}> Skip</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.midsectionpart}>
                        <Image source={require('../../assets/g12.png')}></Image>

                    </View>

                </View>

            </View>
            <View style={styles.textmoney}>
                <Text style={styles.need}>
                    Need Money? We Heard You?
                </Text>

            </View>

            <View style={styles.lowertext}>
                <Text style={{
                    padding: 20, fontSize: 15,

                }}>
                    Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You?
                </Text>

            </View>
            <View style={styles.bootombluecolor}>

                <TouchableOpacity style={styles.bluenetbutton} onPress={rendertothenextpage}>
                    <Image source={require("../../assets/bluenextbutton.png")}>
                    </Image>
                </TouchableOpacity>
            </View>


        </View >
    );
}

const styles = StyleSheet.create({
    bluenetbutton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",

    },
    need: {
        fontSize: 20,
        fontWeight: "600"
    },
    bootombluecolor: {
        display: "flex",
        justifyContent: "flex-end",
        marginRight: 20

    },
    lowertext: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    textmoney: {
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        fontWeight: 'bold',

    },
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    uppersectionpart: {

        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    skipsection: {
        display: "flex",
        marginLeft: 50
    },
    textforskip: {
        margin: 10,
        color: "blue",
        borderBottomWidth: 2,
        borderColor: "blue",
        fontSize: 20,
        fontWeight: "600"
    },
    midsectionpart: {
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});


