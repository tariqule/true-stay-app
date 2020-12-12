import React from "react";
import { Button, View } from "react-native";
import { SIGNUP_SCREEN, SEARCH_SCREEN } from "../../routes";

function LoginScreen(props: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => props.navigation.navigate(SIGNUP_SCREEN)} // go to sign up page
        title="go to sign up"
      ></Button>
      <Button
        onPress={() => props.navigation.navigate(SEARCH_SCREEN)}
        title="go to search screen"
      ></Button>
    </View>
  );
}

export default LoginScreen;
