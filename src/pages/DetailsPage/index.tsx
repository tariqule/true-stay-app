import React from "react";
import {
  Image,
  Button,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Linking
} from "react-native";
import { house1, house2, houses, houses1 } from "../../utils/global";
import {
  themeColorBase,
  themeColorIsabelline,
  GlobalStyles
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
      style={GlobalStyles.container}
    >
      {/** Header View - flex 1*/}
      <View style={GlobalStyles.header}>
        <Text style = {GlobalStyles.Title}> Details </Text>
      </View>
      {/** End Header */}
      
      {/** Photo View - flex 4 */}
      <View style={GlobalStyles.MainPhoto}>
      <View style={GlobalStyles.PhotoImage}>
        {/** Tariq please link the Address of the unit as main title here */}
          <Text style={GlobalStyles.H1}> Link Unit Listing Details Here </Text>
          <Image source={require("../../../assets/images/houses.jpeg")}/>
        </View>
      </View>
      {/** End Photo View */}
      
      {/** Text Data View */}
      <View style={GlobalStyles.TextBody}>
      <ScrollView>
          <View style={{flex:2}}>
          <Text style={GlobalStyles.H1}> Unit Info </Text>
          <Text style={GlobalStyles.H2}> Type </Text>
          <Text style={GlobalStyles.DataFont}> Bind Unit Type Here </Text>
          <Text style={GlobalStyles.H2}> Location </Text>
          <Text style={GlobalStyles.DataFont}> Bind Location Here </Text>
          <Text style={GlobalStyles.H2}> Description </Text>
          <Text style={GlobalStyles.DataFont}> Bind Unit Description Here </Text>
          </View>
          <View style={{flex:1}}>
          <Text style={GlobalStyles.H1}> Landlord Info </Text>
          <Text style={GlobalStyles.H2}> Name </Text>
          <Text style={GlobalStyles.DataFont}> Bind Landlord Name Here </Text>
          <Text style={GlobalStyles.H2}> Phone Number </Text>
          <Text style={GlobalStyles.DataFont}> Bind Landlord Phone </Text>
          <Text style={GlobalStyles.H2}> E-Mail </Text>
          <Text style={GlobalStyles.DataFont}> Bind Landlord Email </Text>
          <TouchableOpacity
              style={GlobalStyles.HorizontalButton}
              onPress={() => Linking.openURL('tel:${1234567890}')}>
              <Text style={GlobalStyles.buttonText}>Call Contact</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      {/** End Text Data View */}
    </View>
    </View>
  );
}

export default DetailsPageScreen;
