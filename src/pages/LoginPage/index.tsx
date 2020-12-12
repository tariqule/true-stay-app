import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonView from "../../components/Button";
import {
  LANDLORD_LISTINGS,
  PASSRESET_SCREEN,
  SEARCH_SCREEN,
  SIGNUP_SCREEN,
} from "../../routes";
import { retrieveUser, storeListing, storeUser } from "../../utils/Storage";
// import { Button } from "react-native-elements";

function LoginScreen(props: any) {
  const { data } = props.route.params;

  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigation = useNavigation();
  //hooks

  const _handleUserName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setUserName(e.nativeEvent.text);
  };
  const _handlePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPassword(e.nativeEvent.text);
  };
  const _handleSubmit = () => {
    retrieveUser().then((user) => {
      user?.userName === username && user?.password === password
        ? navigation.navigate(LANDLORD_LISTINGS)
        : Alert.alert(
            "Password Error",
            "You have entered invalid password or username!"
          );
    });
  };
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
        onChange={_handleUserName}
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
        onChange={_handlePassword}
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
      <ButtonView title="login" onPress={_handleSubmit} />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(PASSRESET_SCREEN)}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderRadius: 20,
          borderWidth: 2,
          width: "60%",
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate(SIGNUP_SCREEN)}>
          <Text>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 500, height: 30, backgroundColor: "#ecf0f1" }} />
    </View>
  );
}
export default LoginScreen;
