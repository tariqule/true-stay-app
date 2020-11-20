import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { SEARCH_SCREEN } from "../../routes";
import { Button } from "react-native-elements";

function LoginScreen() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  //hooks
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <View
        style={{
          width: 500,
          height: 350,
          backgroundColor: "#B97A45",
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {"\n"}
          Welcome to
          {"\n"}
          TrueStay
        </Text>
      </View>
      <View style={{ width: 500, height: 50, backgroundColor: "#ecf0f1" }} />

      <TextInput
        //value={this.state.username}
        // onChangeText={(username) => this.setState({ username })}
        placeholder={"Username"}
        style={{
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: "#B97A45",
          marginBottom: 10,
          borderRadius: 35,
        }}
      />
      <TextInput
        placeholder={"Password"}
        secureTextEntry={true}
        style={{
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: "#B97A45",
          marginBottom: 10,
          borderRadius: 35,
        }}
      />

      <Button
        title="Log in"
        //onPress={_onPressSubmit}
      />
    </View>
  );
}
export default LoginScreen;
