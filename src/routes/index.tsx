import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/LoginPage";
import SignupScreen from "../pages/Signup";
//import SignUpScreen from "../pages/Signup";
import OnboardingScreen from "../pages/Onboarding";
import { PostListingScreen } from "../pages/Listing/PostListingScreen";
import Search from "../pages/Search";

const Stack = createStackNavigator();

//all the screen should be here
export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const SIGNUP_SCREEN = "SIGNUP_SCREEN";
export const ONBOARDING_SCREEN = "ONBOARDING_SCREEN";
export const POSTLISTING_SCREEN = "POSTLISTING_SCREEN";
export const SEARCH_SCREEN = "SEARCH_SCREEN";
export const LOGINPAGE_SCREEN = "LOGINPAGE_SCREEN";

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          gestureEnabled: true,
          cardOverlayEnabled: true,
          headerShown: false,
        })}
      >
        <Stack.Screen name={LOGINPAGE_SCREEN} component={LoginScreen} />
        {/* <Stack.Screen name={ONBOARDING_SCREEN} component={OnboardingScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={POSTLISTING_SCREEN} component={PostListingScreen} />
        <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={SEARCH_SCREEN} component={Search} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
