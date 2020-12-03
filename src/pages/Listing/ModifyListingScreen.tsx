import { useNavigation } from "@react-navigation/native";
import { Container, Content, Footer } from "native-base";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import ButtonView from "../../components/Button";
import Navbar from "../../components/Header";
import { ImageLoader } from "./ImageLoader";

const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

if (Dimensions.get("screen").height < 800) {
  screenHeight = Dimensions.get("screen").height + 100;
}

export const ModifyListingScreen = (props) => {
  const { item } = props?.route?.params;
  const [image, setImage] = React.useState<any>(null);

  const navigation = useNavigation();
  useEffect(() => {
    console.log(JSON.stringify(item) + "+++");
  }, []);

  const pickImage = ImageLoader(setImage);

  return (
    <Container style={styles.container}>
      <Navbar headerTitle="Modify Your Listing" showBack />
      <Content style={{ marginTop: 20 }}>
        {/* <SafeAreaView style={styles.header}>
          <Text style={styles.heading}>Modify Listing</Text>
        </SafeAreaView> */}
        <View style={styles.body}>
          <View style={styles.main}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={item.title}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={item.description}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={item.location}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={item.phoneNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={item.price}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={item.location}
            />
            <View style={styles.photoView}>
              <Text style={styles.texts}>Photos</Text>
              {/* <TouchableOpacity
                style={styles.PhotoButton}
                onPress={() => console.log("upload")}
              >
                <Text style={styles.buttonText}>Choose</Text>
              </TouchableOpacity> */}
              <Button
                title="Choose"
                onPress={pickImage}
                buttonStyle={styles.PhotoButton}
                containerStyle={styles.PhotoButton}
              ></Button>
              {item.image && (
                <Avatar
                  size="large"
                  source={{
                    uri: item.image,
                  }}
                  overlayContainerStyle={{ backgroundColor: "white" }}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  containerStyle={{ marginTop: 20, marginBottom: 20 }}
                />
              )}
            </View>
          </View>
          <View style={styles.footer}></View>
        </View>
      </Content>
      <Footer style={{ backgroundColor: "transparent" }}>
        <ButtonView title={"Modify"} onPress={() => navigation.goBack()} />
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
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
  PhotoButton: {
    backgroundColor: "rgb(187, 122, 68)",
    width: 100,
    borderRadius: 30,
    alignItems: "center",
    height: 30,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },
  photoView: {
    fontSize: 20,
    width: screenWidth - 30,
  },
});
