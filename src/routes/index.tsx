import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "../pages/LoginPage";
import SignUpScreen from "../pages/Signup/SignUpScreen";
import OnboardingScreen from "../pages/Onboarding";
import { PostListingScreen } from "../pages/Listing/PostListingScreen";
import { ModifyListingScreen } from "../pages/Listing/ModifyListingScreen";
import Search from "../pages/Search";
import LandlordSearch from "../pages/LandlordSearch";
import { MenuScreen } from "../pages/Menu";
import LoginScreen from "../pages/LoginPage";
import PassResetScreen from "../pages/PasswordReset";

import ActivityFeedScreen from "../pages/ActivityFeed";
import DetailsPageScreen from "../pages/DetailsPage";
import LandlordListingsScreen from "../pages/LandlordListings";
import ProfileScreen from "../pages/UserProfile";
import ProfileView from "../pages/Profile";
import MapViewSreen from "../pages/Map";

const Stack = createStackNavigator();

//all the screen should be here

export const SCREEN_ROUTES = {
  ONBOARDING_SCREEN: "ONBOARDING_SCREEN",
  LOGIN_SCREEN: "LOGIN_SCREEN",
  SIGNUP_SCREEN: "SIGNUP_SCREEN",
  POSTLISTING_SCREEN: "POSTLISTING_SCREEN",
  SEARCH_SCREEN: "SEARCH_SCREEN",
  LOGINPAGE_SCREEN: "LOGINPAGE_SCREEN",
  MENU_SCREEN: "MENU_SCREEN",
  MODIFYLISTING_SCREEN: "MODIFYLISTING_SCREEN",
  PASSRESET_SCREEN: "PASSRESET_SCREEN",
  ACTIVITYFEED_SCREEN: "ACTIVITYFEED_SCREEN",
  DETAILSPAGE_SCREEN: "DETAILSPAGE_SCREEN;",
  LANDLORD_LISTINGS: "LANDLORD_LISTINGS;",
};

export const ONBOARDING_SCREEN = "ONBOARDING_SCREEN";

export const LOGIN_SCREEN = "LOGIN_SCREEN";
export const SIGNUP_SCREEN = "SIGNUP_SCREEN";

export const POSTLISTING_SCREEN = "POSTLISTING_SCREEN";
export const SEARCH_SCREEN = "SEARCH_SCREEN";
export const LANDLORD_SEARCH_SCREEN = "LANDLORD_SEARCH_SCREEN";
export const LOGINPAGE_SCREEN = "LOGINPAGE_SCREEN";
export const MENU_SCREEN = "MENU_SCREEN";
export const MODIFYLISTING_SCREEN = "MODIFYLISTING_SCREEN";
export const PASSRESET_SCREEN = "PASSRESET_SCREEN";
export const ACTIVITYFEED_SCREEN = "ACTIVITYFEED_SCREEN";
export const DETAILSPAGE_SCREEN = "DETAILSPAGE_SCREEN;";
export const LANDLORD_LISTINGS = "LANDLORD_LISTINGS;";
export const PROFILE_SCREEN = "PROFILE_SCREEN";
export const PROFILE_VIEW = "PROFILE_VIEW";
export const MAP_VIEW = "MAP_VIEW";
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

        <Stack.Screen name={POSTLISTING_SCREEN} component={PostListingScreen} />

        <Stack.Screen
          name={ACTIVITYFEED_SCREEN}
          component={ActivityFeedScreen}
        />
        <Stack.Screen name={SEARCH_SCREEN} component={Search} />
        <Stack.Screen name={DETAILSPAGE_SCREEN} component={DetailsPageScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={InitialScreen} />
        <Stack.Screen name={SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen
          name={MODIFYLISTING_SCREEN}
          component={ModifyListingScreen}
        />
        <Stack.Screen
          name={LANDLORD_SEARCH_SCREEN}
          component={LandlordSearch}
        />
        {/* <Stack.Screen name={POSTLISTING_SCREEN} component={PostListingScreen} /> */}

        <Stack.Screen name={MENU_SCREEN} component={MenuScreen} />
        <Stack.Screen name={LOGINPAGE_SCREEN} component={LoginScreen} />
        <Stack.Screen name={PASSRESET_SCREEN} component={PassResetScreen} />
        <Stack.Screen
          name={LANDLORD_LISTINGS}
          component={LandlordListingsScreen}
        />

        <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
        <Stack.Screen name={PROFILE_VIEW} component={ProfileView} />
        <Stack.Screen name={MAP_VIEW} component={MapViewSreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
