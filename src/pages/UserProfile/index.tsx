import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { SEARCH_SCREEN } from "../../routes";
import { Button } from "react-native-elements";
import { themeColorBase } from "../../styles/global-styles";
import { color } from "react-native-reanimated";
import Navbar from "../../components/Header";
import { Container, Content, Footer } from "native-base";

function ProfileScreen() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  //hooks
  return (
    <Container>
      <Navbar headerTitle="Edit Profile" showBack />
      {/* <View
        style={{
          width: 500,
          height: 80,
          backgroundColor: "#B97A45",
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 27,
            fontWeight: "bold",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {"\n"}
          Edit Profile
        </Text>
      </View> */}
      <Content>
        {/* <View style={{ width: 500, height: 30, backgroundColor: "#ecf0f1" }} /> */}
        <View>
          <View style={{ width: "80%", marginLeft: 50, marginTop: 50 }}>
            <Text style={{ fontSize: 20 }}>First Name </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              placeholder={"enter your valid first name here"}
              style={{
                width: "80%",
                height: 44,
                padding: 10,
                borderBottomWidth: 2,
                borderColor: "#B97A45",
              }}
            />
          </View>
        </View>
        <View>
          <View style={{ width: "80%", marginLeft: 50, marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Last Name </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              placeholder={"enter your valid first name here"}
              style={{
                width: "80%",
                height: 44,
                padding: 10,
                borderBottomWidth: 2,
                borderColor: "#B97A45",
              }}
            />
          </View>
        </View>
        <View>
          <View style={{ width: "80%", marginLeft: 50, marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Your Description </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              placeholder={"enter your valid first name here"}
              style={{
                width: "80%",
                height: 44,
                padding: 10,
                borderBottomWidth: 2,
                borderColor: "#B97A45",
              }}
            />
          </View>
        </View>
        <View>
          <View style={{ width: "80%", marginLeft: 50, marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Your Address</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              placeholder={"enter your valid first name here"}
              style={{
                width: "80%",
                height: 44,
                padding: 10,
                borderBottomWidth: 2,
                borderColor: "#B97A45",
              }}
            />
          </View>
        </View>
      </Content>
      <Footer style={{ backgroundColor: "transparent", paddingBottom: 10 }}>
        <TouchableOpacity
          style={{
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            backgroundColor: themeColorBase,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontFamily: "Montserrat",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
}
export default ProfileScreen;
