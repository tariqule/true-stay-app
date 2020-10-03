import React from "react";
import { Button, Text, View } from "react-native";
import { LOGIN_SCREEN } from "../../routes";

function SignupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Truestay </Text>
      <Button
        onPress={() => navigation.navigate(LOGIN_SCREEN)}
        title="go to sign sign in"
      ></Button>
    </View>
  );
}

export default SignupScreen;
