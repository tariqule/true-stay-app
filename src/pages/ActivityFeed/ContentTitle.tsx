import * as React from "react";
import { Text, View } from "react-native";

export function ContentTitle(text: string) {
  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: 40,

          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </View>
  );
}
