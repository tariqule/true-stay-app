import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  themeColorBase,
  themeColorIsabelline,
} from "../../styles/global-styles";
import { trueStayLogo } from "../../utils/global";
import * as Font from "expo-font";

const OnboardingScreen = () => {
  const [loaded] = Font.useFonts({
    Montserrat: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themeColorIsabelline,
      }}
    >
      <Image
        source={trueStayLogo}
        style={{ width: "60%", height: "32%" }}
      ></Image>
      <TouchableOpacity
        style={{
          marginTop: 50,
          //   paddingTop: 50,
          height: 50,
          width: "60%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: themeColorBase,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Montserrat",
          }}
        >
          Tenant
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          marginTop: 20,
          width: "60%",
          borderColor: themeColorBase,
          borderWidth: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: themeColorBase,
            fontSize: 20,
            fontFamily: "Montserrat",
          }}
        >
          Landlord
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
