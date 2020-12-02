import * as React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Login";
import { BottomSheet } from "react-native-elements";
import { themeColorBase, themeColorPeach } from "../../styles/global-styles";
import { color } from "react-native-reanimated";
import { Avatar } from "react-native-elements";
import { ContentTitle } from "../ActivityFeed/ContentTitle";
import {
  ACTIVITYFEED_SCREEN,
  LOGINPAGE_SCREEN,
  ONBOARDING_SCREEN,
  SEARCH_SCREEN,
} from "../../routes";

export const MenuScreen = ({ navigation }) => {
  const menuData = [
    {
      title: "Feed",
      onPress: () => navigation.navigate(ACTIVITYFEED_SCREEN),
    },
    {
      title: "Explore",
      onPress: () => navigation.navigate(ACTIVITYFEED_SCREEN),
    },
    {
      title: "Notifications",
      onPress: () => navigation.navigate(ACTIVITYFEED_SCREEN),
    },
    {
      title: "Places",
      onPress: () => navigation.navigate(ACTIVITYFEED_SCREEN),
    },
    {
      title: "Search",
      onPress: () => navigation.navigate(SEARCH_SCREEN),
    },
  ];
  return (
    <View style={styles.view}>
      {/* user account info */}
      <View style={styles.textBox}>
        <Avatar rounded icon={{ name: "user", type: "font-awesome" }} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(LOGINPAGE_SCREEN, { data: { tenant: true } })
          }
        >
          <Text style={styles.textName}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textAddress}>Current Location: Toronto, ON</Text>
      </View>
      {/* menu options */}
      <View style={styles.button}>
        {menuData.map((item, _index) => (
          <TouchableOpacity onPress={item.onPress}>
            {ContentTitle(item.title)}
          </TouchableOpacity>
        ))}
      </View>

      {/* logout */}
      <View style={styles.buttonLogout}>
        <Button
          onPress={() => navigation.navigate(ONBOARDING_SCREEN)}
          title="LOG OUT"
          color="#774936"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: themeColorBase,
    fontStyle: "normal",
    alignItems: "stretch",
  },
  textBox: {
    paddingTop: 40,
    paddingLeft: 10,
    color: themeColorPeach,
    backgroundColor: "#C99469",
    flexDirection: "row",
    alignItems: "center",
  },
  textName: {
    color: "white",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  textAddress: {
    color: "white",
    padding: 10,
    backgroundColor: "#C99469",
    paddingLeft: 50,
  },
  button: {
    backgroundColor: themeColorBase,
    fontStyle: "normal",
    alignItems: "flex-start",
    paddingLeft: 50,
  },
  buttonLogout: {
    marginTop: "45%",
    backgroundColor: themeColorBase,
    fontStyle: "normal",
    width: "100%",
    alignItems: "flex-end",
    paddingEnd: 10,
    paddingBottom: 10,
  },
});
