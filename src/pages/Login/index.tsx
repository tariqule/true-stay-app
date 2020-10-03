import React from "react";
import { Button, View } from "react-native";
import { SIGNUP_SCREEN } from "../../routes";

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate(SIGNUP_SCREEN)}
        title="go to sign up"
      ></Button>
    </View>
  );
}

export default LoginScreen;
