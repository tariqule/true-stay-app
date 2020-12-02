import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { SEARCH_SCREEN } from "../../routes";
import { Button } from "react-native-elements";
import { themeColorBase } from "../../styles/global-styles";
import { color } from "react-native-reanimated";

function ProfileScreen() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  //hooks
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <View
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
          Create Profile
        </Text>
      </View>
      <View style={{ width: 500, height: 30, backgroundColor: "#ecf0f1" }} />
      <View>
        <View>
          <Text style={{ fontSize: 20 }}>First Name </Text>
        </View>
        <View>
          <TextInput
            placeholder={"enter your valid first name here"}
            style={{
              width: 250,
              height: 44,
              padding: 10,
              borderBottomWidth: 2,
              borderColor: "#B97A45",
            }}
          />
        </View>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          color: "white",
          padding: 20,
        }}
      ></Text>
      <View>
        <View>
          <Text style={{ fontSize: 20 }}>Last Name </Text>
        </View>
        <View>
          <TextInput
            //value={this.state.username}
            // onChangeText={(username) => this.setState({ username })}
            placeholder={"enter your valid last name here"}
            style={{
              width: 250,
              height: 44,
              padding: 10,
              borderBottomWidth: 2,
              borderColor: "#B97A45",
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "white",
            padding: 20,
          }}
        ></Text>

        <View>
          <Text style={{ fontSize: 20 }}>Email address </Text>
        </View>
        <View>
          <TextInput
            placeholder={"enter your email address here"}
            style={{
              width: 250,
              height: 44,
              padding: 10,
              borderBottomWidth: 2,
              borderColor: "#B97A45",
            }}
          />
        </View>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          color: "white",
          padding: 20,
        }}
      ></Text>

      <TouchableOpacity
        style={{
          marginTop: 50,
          height: 50,
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

      <View style={{ width: 500, height: 30, backgroundColor: "#ecf0f1" }} />
    </View>
  );
}
export default ProfileScreen;
