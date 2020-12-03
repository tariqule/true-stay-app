import React from "react";

/** Used to Navigate to Login Screen */
import { LOGIN_SCREEN } from "../../routes";
import { GlobalStyles } from "../../styles/global-styles";

/** React Native Used Components */
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

//Header Bar
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Content, Footer } from "native-base";
import Navbar from "../../components/Header";

// Gets Screen Dimensions //
const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

function PassResetScreen({ navigation }) {
  const [email, setEmail] = React.useState<string>("");
  const _onChangeEmail = (e) => {
    setEmail(e.nativeEvent.text);
  };
  return (
    <Container style={GlobalStyles.container}>
      <Navbar headerTitle="Reset Password" showBack />
      {/* <SafeAreaView style={GlobalStyles.header}>
        <Text style={GlobalStyles.heading}>Reset Password</Text>
      </SafeAreaView> */}
      <Content
        style={{ marginTop: 100 }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <View style={GlobalStyles.main}>
          <Text style={GlobalStyles.main}>
            To reset your password, please input your email here and we will
            send a notification mail to your email containing instructions for
            password reset. {"\n"}
            Alternatively, please contact our support at 123-456-7890 for
            further assistance.
          </Text>
          <TextInput
            style={GlobalStyles.input}
            onChange={_onChangeEmail}
            placeholder="Please Enter Your Email"
          />
        </View>
      </Content>
      <Footer
        style={{
          backgroundColor: "transparent",
          marginBottom: 20,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={GlobalStyles.HorizontalButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={GlobalStyles.buttonText}>Return to Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={GlobalStyles.HorizontalButton}
          onPress={() => {
            Alert.alert("Message sent!", `Code was sent to ${email}`);
            navigation.goBack();
          }}
        >
          <Text style={GlobalStyles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
}

export default PassResetScreen;
