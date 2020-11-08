import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Login';

export const MenuScreen = ({ navigation }) => {
    return (
    //user info goes here?
      <View style={{ flex: 1}}>
        <Button
          onPress={() => navigation.navigate('Feed')}
          title="FEED"
        />
        <Button
          onPress={() => navigation.navigate('Explore')}
          title="EXPLORE"
        />
        <Button
          onPress={() => navigation.navigate('Messages')}
          title="MESSAGES"
        />
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="NOTIFICATIONS"
        />
        <Button
          onPress={() => navigation.navigate('Photos')}
          title="PHOTOS"
        />
        <Button
          onPress={() => navigation.navigate('Videos')}
          title="VIDEOS"
        />
        <Button
          onPress={() => navigation.navigate('Places')}
          title="PLACES"
        />
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="SETTINGS"
        />
        <Button
          onPress={() => navigation.navigate('Search')}
          title="SEARCH"
        />
      </View>
    );
  }

 //code sample for going back -> should be with each option or should be 1 for all like return back home?
 /*function GoBackScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left' }}>
      <Button onPress={() => navigation.goBack()} title="Home" />
    </View>
  );
}*/

//follow icons btn should be coded -> fb, instagram, twitter

  /*const Drawer = createDrawerNavigator();*/

/*export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="MENU" component={MenuScreen} />
        <Drawer.Screen name="FEED" component={FeedScreen} />
        <Drawer.Screen name="EXPLORE" component={ExploreScreen} />
        <Drawer.Screen name="MESSAGES" component={MessageScreen} />
        <Drawer.Screen name="NOTIFICATIONS" component={NotificationScreen} />
        <Drawer.Screen name="PHOTOS" component={PhotoScreen} />
        <Drawer.Screen name="VIDEOS" component={VideoScreen} />
        <Drawer.Screen name="PLACES" component={PlaceScreen} />
        <Drawer.Screen name="SETTINGS" component={SettingScreen} />
        <Drawer.Screen name="SEARCH" component={SearchScreen} />
        //icons
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/