import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
export default function HomePage(props) {
    const rendertothenextpage = () => {
        console.warn("hello")
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
                    <View style={styles.skipsection}>
                        <Text style={styles.textforskip} onPress={settothenextpage}> Skip</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.midsectionpart}>
                        <Image source={require('../../assets/g12.png')}></Image>

                    </View>

                </View>

            </View>
            <View style={styles.textmoney}>
                <Text>
                    Need Money? We Heard You?
                </Text>

            </View>

            <View style={styles.lowertext}>
                <Text>
                    Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You?
                </Text>

            </View>
            <View style={styles.bootombluecolor}>

                <TouchableOpacity onPress={rendertothenextpage}>
                    <Image source={require("../../assets/bluenextbutton.png")}>
                    </Image>
                </TouchableOpacity>
            </View>

            <View>
                <Button title={"Next Page"} onPress={settothenextpage}></Button>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    bootombluecolor: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
        fontSize: 24
    },
    container: {
        flex: 1,
        marginTop: 20,
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
        margin: 10
    },
    midsectionpart: {
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});


