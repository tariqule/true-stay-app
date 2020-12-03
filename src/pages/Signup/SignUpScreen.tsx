import { Container, Content, Footer } from "native-base";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TextInput,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Navbar from "../../components/Header";
import { POSTLISTING_SCREEN } from "../../routes";
import { storeUser } from "../../utils/Storage";

const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

if (Dimensions.get("screen").height < 800) {
  screenHeight = Dimensions.get("screen").height + 100;
}

export default ({ navigation }) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const [userName, setUserName] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();

  const data = { userName, password, confirmPassword };

  const _handleSubmit = () => {
    setLoading(true);
    if (password !== confirmPassword) {
      Alert.alert("Password Invalid", "Your password does not match.");
      setLoading(false);
    } else {
      setTimeout(() => {
        storeUser(data);
        setLoading(false);
        navigation.navigate(POSTLISTING_SCREEN);
      }, 5000);
    }
  };

  const handleUserName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setUserName(e.nativeEvent.text);
  };
  const handlePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPassword(e.nativeEvent.text);
  };
  const handleConfirmPassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setConfirmPassword(e.nativeEvent.text);
  };
  const continueHandler = () => {
    if (
      userName !== undefined &&
      password !== undefined &&
      confirmPassword !== undefined
    ) {
      false;
    } else {
      return true;
    }
  };
  return (
    <Container style={styles.container}>
      <Navbar headerTitle="Sign up for TrueStay" showBack />

      <Content>
        <View style={{ marginTop: 20 }}>
          {/* <SafeAreaView style={styles.header}>
          <Text style={styles.heading}>TrueStay</Text>
        </SafeAreaView> */}
          <View style={styles.body}>
            <View style={styles.main}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChange={handleUserName}
              />

              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                onChange={handlePassword}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Confirm Password"
                onChange={handleConfirmPassword}
              />
            </View>
            <View style={styles.footer}></View>
          </View>
        </View>
      </Content>
      <Footer style={{ backgroundColor: "transparent", height: "20%" }}>
        <View>
          <TouchableOpacity
            disabled={continueHandler()}
            style={[
              styles.signUpButton,
              {
                flexDirection: "row",
                backgroundColor: !continueHandler()
                  ? "rgb(187, 122, 68)"
                  : "rgb(156, 156, 156)",
              },
            ]}
            onPress={_handleSubmit}
          >
            {!loading ? (
              <Text style={styles.buttonText}>Complete Registration</Text>
            ) : (
              <ActivityIndicator size="large" color="#ffffff" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fbButton}
            onPress={() => alert("Feature not available")}
          >
            <Icon
              style={styles.icon}
              name="facebook"
              size={20}
              color="rgb(36, 160, 255)"
            />
            <Text style={styles.fbButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    backgroundColor: "rgb(187, 122, 68)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    padding: 20,
  },
  body: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth - 30,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 150,
  },
  input: {
    width: screenWidth - 30,
    borderRadius: 15,
    borderColor: "rgb(187, 122, 68)",
    borderWidth: 1.5,
    padding: 12,
    margin: 20,
    fontSize: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  fbButtonText: {
    color: "rgb(36, 160, 255)",
    textAlign: "center",
    //paddingRight: 50,
    fontSize: 20,
  },
  signUpButton: {
    justifyContent: "center",

    width: screenWidth - 30,
    borderRadius: 30,
    alignItems: "center",
    height: 50,
    // margin: 10,
    // padding: 12,
  },
  fbButton: {
    borderColor: "rgb(36, 160, 255)",
    borderWidth: 1.5,
    width: screenWidth - 30,
    borderRadius: 30,
    height: 50,
    marginTop: 10,
    // margin: 10,
    // padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    width: 20,
  },
});
