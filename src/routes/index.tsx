import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/Login";
import SignupScreen from "../pages/Signup";
import OnboardingScreen from "../pages/Onboarding";

import ActivityFeedScreen from "../pages/ActivityFeed";
import DetailsPageScreen from "../pages/DetailsPage";

const Stack = createStackNavigator();

//all the screen should be here
export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const SIGNUP_SCREEN = "SIGNUP_SCREEN";
export const ONBOARDING_SCREEN = "ONBOARDING_SCREEN";

export const ACTIVITYFEED_SCREEN = "ACTIVITYFEED_SCREEN";
export const DETAILSPAGE_SCREEN = "DETAILSPAGE_SCREEN;";

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
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SIGNUP_SCREEN} component={SignupScreen} />
        <Stack.Screen
          name={ACTIVITYFEED_SCREEN}
          component={ActivityFeedScreen}
        />
        <Stack.Screen name={DETAILSPAGE_SCREEN} component={DetailsPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
