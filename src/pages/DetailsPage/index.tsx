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

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const images = [house1, house2, houses1, houses];

function DetailsPageScreen({ navigation }) {
  state = {
    active: 0,
  };

  change = () => {};
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

      {/* <View>
        <Modal visible={false} transparent={true}>
          <ImageViewer imageUrls={images} />
        </Modal>
      </View> */}

      <View
        style={{
          marginTop: 10,
          screenWidth,
          // screenHeight: "60%",
          borderRadius: 20,
        }}
      >
        <ScrollView
          paddingEnabled
          horizontal
          onScroll={this.change}
          style={{ screenWidth }}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width: "100%", height: 300, resizeMode: "contain" }}
            />
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
          }}
        >
          {images.map((i, k) => (
            <Text key={k} style={{ color: "#fff" }}>
              ⬤
            </Text>
          ))}
        </View>
      </View>

      {/* <View>
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
      </View> */}
    </View>
  );
}

export default DetailsPageScreen;
