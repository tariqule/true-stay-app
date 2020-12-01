import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

if (Dimensions.get("screen").height < 800) {
  screenHeight = Dimensions.get("screen").height + 100;
}

export const SignUpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: screenHeight }}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.heading}>TrueStay</Text>
        </SafeAreaView>
        <View style={styles.body}>
          <View style={styles.main}>
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Password" />
            <TextInput style={styles.input} placeholder="Confirm Password" />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => console.log("Signed Up")}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.fbButton}
              onPress={() => console.log("FB button ")}
            >
              <Icon
                style={styles.icon}
                name="facebook"
                size={20}
                color="rgb(36, 160, 255)"
              />
              <Text style={styles.fbButtonText}>Sign Up with FaceBook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    backgroundColor: "rgb(187, 122, 68)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    padding: 20,
  },
  body: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth - 30,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: screenWidth - 30,
    borderRadius: 15,
    borderColor: "rgb(187, 122, 68)",
    borderWidth: 1.5,
    padding: 12,
    margin: 20,
    fontSize: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  fbButtonText: {
    color: "rgb(36, 160, 255)",
    textAlign: "center",
    //paddingRight: 50,
    fontSize: 20,
  },
  signUpButton: {
    backgroundColor: "rgb(187, 122, 68)",
    width: screenWidth - 30,
    borderRadius: 30,
    alignItems: "center",
    margin: 10,
    padding: 12,
  },
  fbButton: {
    borderColor: "rgb(36, 160, 255)",
    borderWidth: 1.5,
    width: screenWidth - 30,
    borderRadius: 30,
    margin: 10,
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    width: 20,
  },
});
