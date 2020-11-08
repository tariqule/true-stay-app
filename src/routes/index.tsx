import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/Login";
import SignupScreen from "../pages/Signup";
import OnboardingScreen from "../pages/Onboarding";
import Search from "../pages/Search";
import {MenuScreen} from "../pages/Menu";

const Stack = createStackNavigator();

//all the screen should be here
export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const SIGNUP_SCREEN = "SIGNUP_SCREEN";
export const ONBOARDING_SCREEN = "ONBOARDING_SCREEN";
export const SEARCH_SCREEN = "SEARCH_SCREEN";
export const MENU_SCREEN = "MENU_SCREEN";

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
        <Stack.Screen name={MENU_SCREEN} component={MenuScreen} />        
        <Stack.Screen name={ONBOARDING_SCREEN} component={OnboardingScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SIGNUP_SCREEN} component={SignupScreen} />
        <Stack.Screen name={SEARCH_SCREEN} component={Search} />                
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
