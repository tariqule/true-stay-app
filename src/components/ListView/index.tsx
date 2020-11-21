import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

interface ListViewProps {
  data: [] | undefined;
}

export const ListView = (props: ListViewProps) => {
  return (
    <ScrollView
      styles={{
        justifyContent: "space-around",
        // paddingLeft: 10,
        padding: 10,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={true}
    >
      {props.popularData?.map((e, i) => (
        <View key={i} style={{ margin: 8 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: screenWidth * 0.35,
              height: screenHeight * 0.25,
              // alignSelf: "center",
              borderRadius: 20,
              // paddingLeft: 10,
              bottom: 0,
            }}
            onPress={e.onPress}
          >
            <Image
              source={e.image}
              style={{ width: "100%", height: "60%", borderRadius: 20 }}
            ></Image>
            <Text
              style={{
                color: "#BB7A44",
                // textAlign: "center",
                padding: 10,
                fontSize: 14,
              }}
            >
              {e.title}
            </Text>
            <Text
              style={{
                color: "#BB7A44",
                textAlign: "right",
                fontSize: 15,
              }}
            >
              ${e.amount}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
