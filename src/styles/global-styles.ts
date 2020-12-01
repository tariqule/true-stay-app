import { StyleSheet, Dimensions } from "react-native";
export const themeColorBase = "#BB7A44";
export const themeColorPeach = "#FEC89A";
export const themeColorPuff = "#F9DCC4";
export const themeColorIsabelline = "#F8EDEB";
export const themeColorPink = "#FCD5CE";
export const themeColorMelon = "#FFB5A7";
export const themeColorBg = '"#E5E1DE"';
export const fontColorGrey = "grey";

const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    backgroundColor: "rgb(187, 122, 68)",
    justifyContent: "flex-end",
    alignItems: "flex-start",
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
});
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    header: {
      flex: 1.5,
      backgroundColor: themeColorBase
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
        flexDirection:"column",
        flex:1,
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
      flex:1,
      fontSize: 50,
      fontWeight: "bold",
      justifyContent:"flex-end",
      textAlignVertical:"bottom",
      color: themeColorIsabelline
    },
    H1: {
      fontSize: 30,
      fontWeight: "bold",
      alignSelf:"center",
      color: themeColorBase
    },
    H2: {
      fontSize: 20,
      fontWeight: "bold",
      alignSelf:"flex-start",
      color: themeColorBase
    },
    DataFont:{
      fontSize: 15,
      color: fontColorGrey,
    },
    MainPhoto:{
      flex: 3
    },
    PhotoImage:{
      flex: 4,
      justifyContent:"center",
      alignItems:"center"
    },
    TextBody:{
      flex: 5,
      padding: screenWidth/50
    }
  });
