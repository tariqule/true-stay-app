import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

interface ButtonViewProps {
  title: string;
  onPress?: (event: Event) => void;
  disabled?: boolean;
  color?: string;
  loading?: boolean;
}
export const ButtonView = (props: ButtonViewProps) => (
  <TouchableOpacity
    style={[
      styles.Button,
      {
        backgroundColor: props.color || "rgb(187, 122, 68)",
        flexDirection: "row",
        justifyContent: "center",
      },
    ]}
    onPress={props.onPress}
    disabled={props.disabled}
  >
    {!props.loading ? (
      <Text style={styles.buttonText}>{props.title}</Text>
    ) : (
      <ActivityIndicator size="large" color="#ffffff" />
    )}
  </TouchableOpacity>
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
