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

function _renderItem({ item, index }) {
  return (
    <View
      style={{
        backgroundColor: "#000",
        borderRadius: 5,
        height: 250,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 30 }}>{item.images}</Text>
    </View>
  );
}

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
            color: "white",
          }}
        >
          Details
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          screenWidth,
          // screenHeight: "60%",
          borderRadius: 20,
        }}
      >
        <Carousel
          layout={"default"}
          data={images}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
        />

        {/* <ScrollView
          paddingEnabled
          horizontal
          style={{ screenWidth }}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ image }}
              style={{ width: "100%", height: 300, resizeMode: "contain" }}
            />
          ))}
        </ScrollView> */}
      </View>

      <View style={{ paddingLeft: 10 }}>
        <View>
          <Text
            style={{
              fontSize: 30,
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
              fontSize: 30,
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
              fontSize: 30,
              color: "grey",
            }}
          >
            3 Bedroom, Studio, 2 Washrooms
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              backgroundColor: themeColorBase,
              height: 50,
              width: 300,
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
