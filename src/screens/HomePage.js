import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

export default function HomePage(props) {
    const rendertothenextpage = () => {
        console.warn("hello")
        props.navigation.navigate("Home2")
    }
    const settothenextpage = () => {
        props.navigation.navigate("Home2")
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/g12.png')}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.text}>Need Money ? We Heard You ?</Text>
                <Text style={styles.text2}>Get the Best Loans For Your Personal & Business Needs. Just Get in Touch with Us</Text>
                <Button
                    style={styles.bluenetbutton}
                    title="Get Started"
                    onPress={() => settothenextpage()} />
                    <Text style={styles.text3}></Text>
                <Button
                    style={styles.bluenetbutton2}
                    title="Skip"
                    onPress={() =>  props.navigation.navigate("Login")} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    bluenetbutton: {
        marginBottom: 10
    },
    bluenetbutton2 : {
        marginTop : 30
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Set your background color here
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
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 200, // Set your logo image dimensions
        height: 200, // Set your logo image dimensions
        resizeMode: 'contain', // Adjust this based on your logo aspect ratio
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', // Set your text color here
        marginBottom: 30
    },
    text2: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: '#333', // Set your text color here
        marginBottom: 30,
        textAlign: 'center'
    },
    text3 : {
        marginBottom : 10
    }
});


