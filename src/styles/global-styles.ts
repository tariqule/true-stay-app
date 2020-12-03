
import { StyleSheet, Dimensions } from "react-native";
export const themeColorBase = "#BB7A44";
export const themeColorPeach = "#FEC89A";
export const themeColorPuff = "#F9DCC4";
export const themeColorIsabelline = "#F8EDEB";
export const themeColorPink = "#FCD5CE";
export const themeColorMelon = "#FFB5A7";

// Basic Font
export const fontColorGrey = "#616161";
export const fontColorWhite = "#FFFFFF"
export const fontColorBlack = "#000000"

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;

export const GlobalStyles = StyleSheet.create({
  MainContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width: "100%",
    height: "100%",
    // marginTop: screenHeight*0.035,
    backgroundColor: themeColorPeach
  },
  ContentContainer:{
    backgroundColor: themeColorPeach,
    height: screenHeight,
    width: screenWidth,
    padding: screenWidth/100
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1.5,
    backgroundColor: themeColorBase,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 20,
    color: "white",
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
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat"
  },
  MainButtonTextType1: {
    color: themeColorPuff,
    fontSize: 20,
    fontWeight:"bold",
    fontFamily: "Montserrat"
  }, 
  MainButtonTextType2: {
    color: themeColorBase,
    fontSize: 20,
    fontWeight:"bold",
    fontFamily: "Montserrat"
  },
  texts: {
    fontSize: 18,
    marginBottom: 5,
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
  ButtonMainType1: {
    width: screenWidth*0.5,
    height: screenHeight*0.075,
    margin: 5,
    borderWidth:2,
    borderRadius: 15,
    borderColor: themeColorBase,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: themeColorBase,
    shadowColor: "#0000",
    // shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 3
  },
  ButtonMainType2: {
    width: screenWidth*0.5,
    height: screenHeight*0.075,
    margin: 5,
    borderWidth:2,
    borderRadius: 15,
    borderColor: themeColorBase,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: themeColorPuff,
    shadowColor: "#0000",
    // shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 3
  },
  Button: {
    backgroundColor: "rgb(187, 122, 68)",
    width: screenWidth - 30,
    borderRadius: 30,
    alignItems: "center",
    margin: 10,
    padding: 12,
  },
  HorizontalButton: {
    backgroundColor: "rgb(187, 122, 68)",
    flexDirection: "column",
    flex: 1,
    borderRadius: 30,
    alignItems: "center",
    margin: 10,
    padding: 12,
  },
  PhotoButton: {
    backgroundColor: "rgb(187, 122, 68)",
    width: 100,
    borderRadius: 30,
    alignItems: "center",
  },
  Vfooter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Hfooter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  photoView: {
    fontSize: 20,
    width: screenWidth - 30,
  },
  Title: {
    flex: 1,
    fontSize: 50,
    fontWeight: "bold",
    justifyContent: "flex-end",
    textAlignVertical: "bottom",
    color: themeColorIsabelline,
  },
  H1: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: themeColorBase,
  },
  H2: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: themeColorBase,
  },
  DataFont: {
    fontSize: 15,
    color: fontColorGrey,
  },
  MainPhoto: {
    flex: 3,
  },
  PhotoImage: {
    flex: 4,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  TextBody: {
    flex: 5,
    padding: screenWidth / 50,
  },
  MainLogo:{
    alignSelf:"center",
    width: screenWidth*0.8,
    borderRadius: 30,
    borderColor: fontColorBlack,
    shadowColor: "#0000",
    // shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 3
  }
});
