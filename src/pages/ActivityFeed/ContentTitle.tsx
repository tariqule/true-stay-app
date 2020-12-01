import { Text, View } from "react-native";
import * as React from "react";

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
