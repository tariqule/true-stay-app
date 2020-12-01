import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

interface ButtonViewProps {
  title: string;
  onPress?: (event: Event) => void;
}
export const ButtonView = (props: ButtonViewProps) => (
  <View>
    <TouchableOpacity style={styles.Button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  </View>
);

export default ButtonView;

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  Button: {
    backgroundColor: "rgb(187, 122, 68)",
    width: screenWidth - 30,
    borderRadius: 30,
    alignItems: "center",
    margin: 10,
    padding: 12,
  },
});
