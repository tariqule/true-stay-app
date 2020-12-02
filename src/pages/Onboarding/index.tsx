import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  themeColorBase,
  themeColorIsabelline,
} from "../../styles/global-styles";
import { trueStayLogo } from "../../utils/global";
import * as Font from "expo-font";
import { SIGNUP_SCREEN } from "../../routes";

// import { ACTIVITYFEED_SCREEN } from "../../routes";

const OnboardingScreen = ({ navigation }) => {
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
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: themeColorBase,
          shadowColor: "#0000",
          // shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          elevation: 1,
        }}
        onPress={() => navigation.navigate("ACTIVITYFEED_SCREEN")}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "Montserrat",
            }}
          >
            Tenant
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          marginTop: 20,
          width: "60%",
          borderRadius: 15,
          borderColor: themeColorBase,
          borderWidth: 3,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#0000",
          // shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,

          // elevation: 1,
        }}
        onPress={() => navigation.navigate(SIGNUP_SCREEN)}
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
