import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
export default function HomePage2(props) {
    const leftsidefunction = () => {
        props.navigation.navigate("Home")
    }
    const rightsidefunction = () => {
        props.navigation.navigate("Home3")
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/g10.png')}
                    style={styles.logo}
                />
            </View>
            <Text style={styles.text}>Easy & Transparent Loan Process</Text>
            <Text style={styles.text2}>Get your loan approved in just some steps once you are onboarded with us. Don't wait!</Text>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.bluenetbutton}
                    title="Previous"
                    onPress={() => leftsidefunction()}
                />
                <View style={{ flex: 1 }} /> 
                <Button
                    style={styles.bluenetbutton}
                    title="Next"
                    onPress={() => rightsidefunction()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16, // Adjust as needed
      },
      bluenetbutton: {
        backgroundColor: 'blue', // Example button style
        padding: 10, // Example button style
        borderRadius: 5, // Example button style
      },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 300, // Set your logo image dimensions
        height: 300, // Set your logo image dimensions
        resizeMode: 'contain', // Adjust this based on your logo aspect ratio
    },
    text2: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,

    },
    lowertext: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        fontSize: 15,
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
    skipsection: {
        display: "flex",
        marginLeft: 50
    },
    textforskip: {
        margin: 10
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
    text3: {
        marginBottom: 10
    }
});


