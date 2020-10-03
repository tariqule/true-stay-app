/** Last Modified: George Zhou, 10/3/2020 */
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/**This is the top bulk of the screen view */}
      <View style = {styles.topview}>
        <Text>This is top frame!</Text>
      </View>
      {/**This is the center bulk of the screen view */}
      <View style = {styles.centerview}>
        <Text> Welcome to TrueStay! </Text>
        <Text> Insert Logo Here!</Text>
        <Text></Text>
        {/** Progress Bar Component */}
        <Text> Loading..... </Text>
        <View style={styles.progressbar}>
          <Animated.View style={StyleSheet.absoluteFill}/>
        </View>
        <Text>80%</Text>
      </View>
      {/**This is the bottom bulk of the screen view */}
      <View style = {styles.botview}>
        <Text >This is bottom frame!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height : 500,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topview:{
    width:'100%',
    flex: 1,
    flexDirection: "row",
    justifyContent:"center",
    backgroundColor:'#FF9F33'
  },
  centerview:{
    flex: 4,
    flexDirection:"column",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:'#fff'
    
  },
  botview:{
    width:'100%',
    flex: 1,
    flexDirection: "row",
    justifyContent:"center",
    backgroundColor:'#FF9F33'
  },
  progressbar:{
    height: 20,
    width: 400,
    backgroundColor: 'white',
    borderColor: '#FF9F33',
    borderWidth: 2,
    borderRadius: 5,
    flexDirection:"row"
  },
  absoluteFill:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#FFED4F",
    width:'50%'
  }
});
