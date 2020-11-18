import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SEARCH_SCREEN } from "../../routes";

function LoginScreen(navigation) {
  //hooks
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Truestay </Text>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ecf0f1",
        }}
      >
        <TextInput
          //value={this.state.username}
          // onChangeText={(username) => this.setState({ username })}
          placeholder={"Username"}
          style={{
            width: 200,
            height: 44,
            padding: 10,
            borderWidth: 1,
            borderColor: "black",
            marginBottom: 10,
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
            borderColor: "black",
            marginBottom: 10,
          }}
        />

        <Button
          title={"Login"}
          onPress={() => navigation.navigate(SEARCH_SCREEN)}
        />
      </View>
    </View>
  );
}
export default LoginScreen;
