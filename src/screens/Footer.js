import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function Footer() {
    return (
        <View style={styles.footerstyle} >
            <View>
                <Image source={require('../../assets/Frame97.png')}></Image>
            </View>
            <View>
                <Image source={require('../../assets/Frame100.png')}></Image>
            </View>
            <View>
                <Image source={require('../../assets/Frame128.png')}></Image>
            </View>
            <View>
                <Image source={require('../../assets/Frame129.png')}></Image>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        footerstyle: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
        }
    }

)