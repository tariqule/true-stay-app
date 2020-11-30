import React from "react";
/** Used to Navigate to Login Screen */
import { LOGIN_SCREEN } from "../../routes";
import { GlobalStyles } from "../../styles/global-styles";

/** React Native Used Components */
import { 
  Button,
  View,
  ScrollView,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity } 
  from "react-native";

//Header Bar
import { SafeAreaView } from "react-native-safe-area-context";

// Gets Screen Dimensions //
const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

function PassResetScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
    <SafeAreaView style={GlobalStyles.header}>
      <Text style={GlobalStyles.heading}>
        Reset Password
      </Text>
    </SafeAreaView>
    <View style = {GlobalStyles.body}>
      <View style = {GlobalStyles.main}>
        <Text style = {GlobalStyles.main}>
          To reset your password, please input your email here and we will send a notification mail to your email
          containing instructions for password reset. {'\n'}
          Alternatively, please contact our support at 123-456-7890 for further assistance.
        </Text>
        <TextInput style={GlobalStyles.input} placeholder="Please Enter Your Email" />
      </View>
    </View>
    <View style={GlobalStyles.Vfooter}>
            <TouchableOpacity
              style={GlobalStyles.HorizontalButton}
              onPress={() => navigation.navigate(LOGIN_SCREEN)}
            >
              <Text style={GlobalStyles.buttonText}>Return to Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={GlobalStyles.HorizontalButton}
              onPress={() => navigation.navigate(LOGIN_SCREEN)}
            >
              <Text style={GlobalStyles.buttonText}>Send Verification</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}

export default PassResetScreen;
