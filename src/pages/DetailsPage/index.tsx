import React from "react";
import {
  Image,
  Button,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { house1, house2, houses, houses1 } from "../../utils/global";
import {
  themeColorBase,
  themeColorIsabelline,
} from "../../styles/global-styles";

import { Ionicons } from "@expo/vector-icons";
// import { Modal } from "react-native";
// import ImageViewer from "react-native-image-zoom-viewer";
// import Carousel from "react-native-snap-carousel";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const images = [
  { title: house1 },
  { title: house2 },
  { title: houses1 },
  { title: houses },
];

function DetailsPageScreen({ navigation }) {
  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <View
        style={{
          marginTop: 0,
          height: 150,
          backgroundColor: themeColorBase,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            marginTop: 80,
            alignself: "center",
            paddingLeft: 10,
            color: "white",
          }}
        >
          Details
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          paddingLeft: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "grey",
          }}
        >
          Photos
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          // paddingLeft: 30,
          alignItems: "center",
        }}
      >
        <Image
          style={{ screenWidth, height: screenHeight * 0.3, borderRadius: 10 }}
          source={require("../../../assets/images/houses.jpeg")}
        />
      </View>

      <View style={{ paddingLeft: 10, paddingTop: 10 }}>
        <View>
          <Text
            style={{
              fontSize: 26,
              color: "grey",
            }}
          >
            Bachelor's Apartment
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "grey",
            }}
          >
            Address
          </Text>
          <Text
            style={{
              fontSize: 26,
              color: "grey",
            }}
          >
            13th Pharmacy Ave
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "grey",
            }}
          >
            Description
          </Text>
          <Text
            style={{
              fontSize: 26,
              color: "grey",
            }}
          >
            3 Bedroom, Studio, 2 Washrooms
          </Text>
        </View>

        <View style={{ alignItems: "center", paddingTop: 20, paddingRight: 8 }}>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              backgroundColor: themeColorBase,
              height: 55,
              width: screenWidth - 30,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
                alignSelf: "center",
                paddingTop: 5,
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DetailsPageScreen;
