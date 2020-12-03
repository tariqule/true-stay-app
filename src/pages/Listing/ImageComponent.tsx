import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { Avatar } from "react-native-elements";
import { styles } from "./styles";

export function ImageComponent(pickImage: () => Promise<void>, image: any) {
  return (
    <View style={styles.photoView}>
      <Text style={styles.texts}>Photos</Text>

      <Button
        title="Choose"
        onPress={pickImage}
        buttonStyle={styles.PhotoButton}
        containerStyle={styles.PhotoButton}
      ></Button>
      {image && (
        <Avatar
          size="large"
          source={{
            uri: image,
          }}
          overlayContainerStyle={{ backgroundColor: "white" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 20, marginBottom: 20 }}
        />
      )}
    </View>
  );
}
