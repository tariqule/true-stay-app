import * as React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Login';
import { BottomSheet } from 'react-native-elements';
import { themeColorBase, themeColorPeach } from '../../styles/global-styles';
import { color } from 'react-native-reanimated';
import { Avatar } from 'react-native-elements';

export const MenuScreen = (props: any) => {
    return (
      <View style={styles.view}>
    {/* user account info */}
    <View style={styles.textBox}>
        <Avatar
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          //example of style
          // source={{ uri: 'https://', }}
          // icon={{name: 'user', type: 'font-awesome'}}
          // onPress={() => console.log("Hi")}
          // activeOpacity={0.7}
          // containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
        />
      <Text style={styles.textName}>Name Surname</Text>
      </View>
      <View>
      <Text style={styles.textAddress}>City, Province</Text>
    </View>

    {/* menu options */}      
        <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate('Feed')}
          title="FEED"
          color = {themeColorBase}
        />
        <Button
          onPress={() => props.navigation.navigate('Explore')}
          title="EXPLORE"
          color = {themeColorBase}
          />
        <Button
          onPress={() => props.navigation.navigate('Messages')}
          title="MESSAGES"
          color = {themeColorBase}
        />
        <Button
          onPress={() => props.navigation.navigate('Notifications')}
          title="NOTIFICATIONS"
          color = {themeColorBase}
          />
        <Button
          onPress={() => props.navigation.navigate('Places')}
          title="PLACES"
          color = {themeColorBase}
          />
        <Button
          onPress={() => props.navigation.navigate('Settings')}
          title="SETTINGS"
          color = {themeColorBase}
          />
        <Button
          onPress={() => props.navigation.navigate('Search')}
          title="SEARCH"
          color = {themeColorBase}
          />
        </View>

        {/* logout */}
        <View style={styles.buttonLogout}>          
          <Button            
            onPress={() => props.navigation.navigate('Login')}
            title="LOG OUT"
            color = "#774936"
        /> 
        </View>    
      </View>        
    );
  }

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: themeColorBase,
      fontStyle: "normal",
      alignItems: "stretch",      
    },
    textBox: {
      paddingTop: 40,
      paddingLeft: 10,
      color: themeColorPeach,
      backgroundColor: "#C99469",
      flexDirection: "row",
      alignItems: "center"     
    },
    textName: {
      color: "white",
      padding: 10,
      fontSize: 20,
      fontWeight: "bold"
    },
    textAddress: {
      color: "white",
      padding: 10,
      backgroundColor: "#C99469",
      paddingLeft: 50
    },
    button: {
      backgroundColor: themeColorBase,
      fontStyle: "normal",
      alignItems: "flex-start",
      paddingLeft: 50
    },
    buttonLogout: {
      marginTop: "45%",
      backgroundColor: themeColorBase,
      fontStyle: "normal",
      width: "100%",
      alignItems: "flex-end",
      paddingEnd: 10,
      paddingBottom: 10
    }   
  });