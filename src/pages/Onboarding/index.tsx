//#region Imports
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles, screenWidth } from "../../styles/global-styles";
import { trueStayLogo } from "../../utils/global";
import * as Font from "expo-font";
import { SCREEN_ROUTES, SIGNUP_SCREEN } from "../../routes";
//#endregion Imports

// import { ACTIVITYFEED_SCREEN } from "../../routes";

// This Screen shows as soon as the app is launched
const OnboardingScreen = ({ navigation }) => {
  const [loaded] = Font.useFonts({
    Montserrat: require("../../../assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    // This is the main container containing the whole screen
    <View style={GlobalStyles.MainContainer}>
      {/* Top flex box contains the logo image */}
      <View style={{ flex: 2 }}>
        <Image
          source={trueStayLogo}
          resizeMode={"contain"}
          style={GlobalStyles.MainLogo}
        ></Image>
      </View>
      {/* End Top Flex Box */}

      {/* Bottom flex box contains the buttons */}
      <View style={{ flex: 1 }}>
        {/* Tenant User Button */}
        <TouchableOpacity
          style={GlobalStyles.ButtonMainType1}
          onPress={() => navigation.navigate(SCREEN_ROUTES.ACTIVITYFEED_SCREEN)}
        >
          <Text style={GlobalStyles.MainButtonTextType1}> Tenant </Text>
        </TouchableOpacity>
        {/* End Tenant Button */}
        {/* Landlord User Button */}
        <TouchableOpacity
          style={GlobalStyles.ButtonMainType2}
          onPress={() => navigation.navigate(SCREEN_ROUTES.SIGNUP_SCREEN)}
        >
          <Text style={GlobalStyles.MainButtonTextType2}> Landlord </Text>
        </TouchableOpacity>
        {/* End Landlord Button */}
      </View>
      {/* End Bottom Flex Box */}
    </View>
    // End main container view
  );
};
export default OnboardingScreen;
