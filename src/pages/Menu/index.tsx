import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ACTIVITYFEED_SCREEN, MAP_VIEW, SEARCH_SCREEN } from "../../routes";
import { themeColorBase, themeColorPeach } from "../../styles/global-styles";
import { ContentTitle } from "../ActivityFeed/ContentTitle";
import { Footer } from "./Footer";
//import { Footer } from "./Footer";
import { Header } from "./Header";

export const MenuScreen = ({ navigation }) => {
  const menuData = [
    {
      title: "Feed",
      onPress: () => navigation.navigate(ACTIVITYFEED_SCREEN),
    },
    {
      title: "Location",
      onPress: () => navigation.navigate(MAP_VIEW),
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
  const Contents = (
    <View style={styles.button}>
      {menuData.map((item, _index) => (
        <TouchableOpacity onPress={item.onPress}>
          {ContentTitle(item.title)}
        </TouchableOpacity>
      ))}
    </View>
  );
  return (
    <View style={styles.view}>
      {/* user account info */}
      {Header(navigation)}
      <View>
        <Text style={styles.textAddress}>Current Location: Toronto, ON</Text>
      </View>
      {/* menu options */}
      {Contents}

      {/* logout */}
      {Footer(navigation)}
    </View>
  );
};

export const styles = StyleSheet.create({
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
