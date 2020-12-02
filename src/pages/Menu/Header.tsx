import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { LOGINPAGE_SCREEN } from "../../routes";
import { styles } from "./index";

export function Header(navigation: any) {
  return (
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
  );
}
