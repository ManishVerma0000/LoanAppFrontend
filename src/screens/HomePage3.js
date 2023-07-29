import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function HomePage3(props) {
    const getstarted = () => {
        props.navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.uppersectionpart}>
                    <Image source={require('../../assets/one.png')}></Image>
                    <View style={styles.skipsection}>
                        <Text style={styles.textforskip}> Skip</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.midsectionpart}>
                        <Image source={require('../../assets/image3.png')}></Image>

                    </View>

                </View>

            </View>
            <View style={styles.textmoney}>
                <Text style={styles.text2}>
                    Loan Approval In 48 Hrs.
                </Text>

            </View>

            <View style={styles.lowertext}>
                <Text>
                    Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You?
                </Text>
            </View>
            <StatusBar style="auto" />
            <View style={styles.buttonpressme}>

                < Button title='Get Started' onPress={getstarted}></Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "blue",
        width: 100,
        height: 50,
        fontWeight: "bold"
    },
    buttonpressme: {

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text2: {
        color: "black",
        fontWeight: "bold"
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


