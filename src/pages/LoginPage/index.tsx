import React, { useState } from "react";
import { Text, View, TextInput, SafeAreaView } from "react-native";
import ButtonView from "../../components/Button";
import { SEARCH_SCREEN } from "../../routes";
// import { Button } from "react-native-elements";

function LoginScreen({ route }) {
  const { data } = route.params;
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
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "rgb(187, 122, 68)",
          justifyContent: "flex-end",
          width: 500,
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "white",
            padding: 20,
          }}
        ></Text>
      </SafeAreaView>
      <View
        style={{
          width: 500,
          height: 300,
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
          {"\n"}
          {data?.tenant ? "Tenants" : "Landlord"}
        </Text>
      </View>
      <View style={{ width: 500, height: 30, backgroundColor: "#ecf0f1" }} />

      <TextInput
        //value={this.state.username}
        // onChangeText={(username) => this.setState({ username })}
        placeholder={"Username"}
        style={{
          width: "90%",
          // width: 250,
          height: 44,
          padding: 10,
          borderWidth: 2,
          borderColor: "#B97A45",
          marginBottom: 10,
          borderRadius: 20,
        }}
      />
      <TextInput
        placeholder={"Password"}
        secureTextEntry={true}
        style={{
          width: "90%",
          // width: 250,
          height: 44,
          padding: 10,
          borderWidth: 2,
          borderColor: "#B97A45",
          marginBottom: 10,
          borderRadius: 20,
        }}
      />
      <ButtonView title="login" />

      <View style={{ width: 500, height: 30, backgroundColor: "#ecf0f1" }} />
    </View>
  );
}
export default LoginScreen;
