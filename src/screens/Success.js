import React from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

export default function Success(props) {
  const routetothenextpage = () => {
    props.navigation.navigate("TotalLoan");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require("../../assets/next.png")} style={styles.logo} /> */}
        <Text style={styles.headerText}>HOME LOAN APPLICATION</Text>
        <Image source={require("../../assets/face.png")} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <View style={styles.innercontainer}>
          <Text style={styles.successText}>Hurray! You have successfully filled the form.</Text>
          <Text style={styles.successText}>Sit back while our team completes verification.</Text>
          <Text style={styles.successText}>You will see a notification under the Notification tab.</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={routetothenextpage}>
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  logo: {
    height: 40,
    width: 40,
  },
  headerText: {
    marginTop: 15,
    color: "blue",
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    flex: 4,
    justifyContent: "center",
  },
  innercontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#5045E6",
    padding: 15,
    borderRadius: 12,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
