import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "../pages/LoginPage";
import SignUpScreen from "../pages/Signup";
import OnboardingScreen from "../pages/Onboarding";
import { PostListingScreen } from "../pages/Listing/PostListingScreen";
import { ModifyListingScreen } from "../pages/Listing/ModifyListingScreen";
import Search from "../pages/Search";
import { MenuScreen } from "../pages/Menu";
import LoginScreen from "../pages/LoginPage";

const Stack = createStackNavigator();

//all the screen should be here
export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const SIGNUP_SCREEN = "SIGNUP_SCREEN";
export const ONBOARDING_SCREEN = "ONBOARDING_SCREEN";
export const POSTLISTING_SCREEN = "POSTLISTING_SCREEN";
export const SEARCH_SCREEN = "SEARCH_SCREEN";
export const LOGINPAGE_SCREEN = "LOGINPAGE_SCREEN";
export const MENU_SCREEN = "MENU_SCREEN";
export const MODIFYLISTING_SCREEN = "MODIFYLISTING_SCREEN";

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
        <Stack.Screen name={ONBOARDING_SCREEN} component={OnboardingScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={InitialScreen} />
        <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={POSTLISTING_SCREEN} component={PostListingScreen} />
        <Stack.Screen
          name={MODIFYLISTING_SCREEN}
          component={ModifyListingScreen}
        />
        {/* <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} /> */}
        <Stack.Screen name={SEARCH_SCREEN} component={Search} />
        <Stack.Screen name={MENU_SCREEN} component={MenuScreen} />
        <Stack.Screen name={LOGINPAGE_SCREEN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
