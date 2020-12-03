import { useNavigation } from "@react-navigation/native";
import { Container, Content, Footer } from "native-base";
import React, { useState } from "react";
import {
  Alert,
  NativeSyntheticEvent,
  ScrollView,
  TextInputChangeEventData,
} from "react-native";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { color } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonView from "../../components/Button";
import Navbar from "../../components/Header";
import { LANDLORD_LISTINGS } from "../../routes";
import { retrieveUser, storeListing } from "../../utils/Storage";
import { Avatar } from "react-native-elements";
import { ImageLoader } from "./ImageLoader";

const screenWidth = Dimensions.get("screen").width;
var screenHeight = Dimensions.get("screen").height;

if (Dimensions.get("screen").height < 800) {
  screenHeight = Dimensions.get("screen").height + 100;
}

// landlordAvatar: any;
// title: string;
// listImage?: any;
// description?: string;
// image?: any;
// location?: string;
// amount?: any;
// name?: string;
// phoneNumber?: string;
// email?: string;
// onPress?: ((event: GestureResponderEvent) => void) | undefined;

export const PostListingScreen = (props) => {
  const routes = props?.route;
  const params = routes?.params;
  const newUser = params?.newUser;

  const [loading, setLoading] = React.useState<boolean>();

  const [userInfo, setUserInfo] = React.useState<any>();
  const [title, setTitle] = React.useState<any>();
  const [description, setDescription] = React.useState<any>();
  const [location, setLocation] = React.useState<any>();
  const [email, setEmail] = React.useState<any>();
  const [price, setPrice] = React.useState<any>();
  const [phoneNumber, setPhoneNumber] = React.useState<any>();

  const [image, setImage] = useState<any>(null);

  const navigation = useNavigation();

  newUser !== false && newUser === undefined && Greetings();

  const pickImage = ImageLoader(setImage);

  const {
    _handleChangeTitle,
    _handleChangeLocation,
    _handleChangeEmail,
    _handleChangeDescription,
    _handleChangePhoneNumber,
    _handleChangePrice,
  } = inputChangeHandler(
    setTitle,
    setLocation,
    setDescription,
    setPhoneNumber,
    setPrice,
    setEmail
  );

  const continueHandler = () => {
    if (
      title &&
      location &&
      description &&
      phoneNumber &&
      price &&
      email &&
      image
    ) {
      false;
    } else {
      return true;
    }
  };
  const _handleOnSubmit = () => {
    setLoading(true);
    if (
      title &&
      location &&
      description &&
      phoneNumber &&
      price &&
      email &&
      phoneNumber
    ) {
      setTimeout(() => {
        navigation.navigate(LANDLORD_LISTINGS);
        retrieveUser().then((listings) => {
          listings
            ? storeListing([
                ...[listings],

                ...[
                  {
                    title,
                    location,
                    description,
                    phoneNumber,
                    price,
                    email,
                    image,
                  },
                ],
              ])
            : storeListing([
                {
                  title,
                  location,
                  description,
                  phoneNumber,
                  price,
                  email,
                  image,
                },
              ]);
        });

        setLoading(false);
      }, 3200);
    }
  };
  return (
    <Container style={styles.container}>
      <Navbar
        headerTitle="Post New Listing"
        showBack
        showViewIcon
        onPressViewIcon={() => navigation.navigate(LANDLORD_LISTINGS)}
      />
      <Content>
        <View style={{ marginTop: 20 }}>
          {/* <SafeAreaView style={styles.header}>
          <Text style={styles.heading}>Post Listing</Text>
        </SafeAreaView> */}
          <View style={styles.body}>
            <View style={styles.main}>
              <TextInput
                style={styles.input}
                placeholder="Title"
                onChange={_handleChangeTitle}
              />
              <TextInput
                style={styles.input}
                placeholder="Location"
                onChange={_handleChangeLocation}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChange={_handleChangeEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Description"
                onChange={_handleChangeDescription}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                onChange={_handleChangePhoneNumber}
              />
              <TextInput
                style={styles.input}
                placeholder="Price"
                onChange={_handleChangePrice}
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
                {image && (
                  <Avatar
                    size="large"
                    source={{
                      uri: image,
                    }}
                    overlayContainerStyle={{ backgroundColor: "white" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{ marginTop: 20, marginBottom: 20 }}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </Content>
      <Footer
        style={{
          backgroundColor: "transparent",
          marginBottom: 10,
          flexDirection: "column",
        }}
      >
        <ButtonView
          color={
            !continueHandler() ? "rgb(187, 122, 68)" : "rgb(156, 156, 156)"
          }
          title={"Submit"}
          onPress={_handleOnSubmit}
          loading={loading}
        />
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

  PhotoButton: {
    backgroundColor: "rgb(187, 122, 68)",
    width: 100,
    borderRadius: 30,
    alignItems: "center",
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
function Greetings() {
  React.useEffect(() => {
    retrieveUser().then((user) =>
      Alert.alert(
        `Welcome ${user?.userName}`,
        "Now you are all set. You can start posting your listing!"
      )
    );
  }, []);
}

function inputChangeHandler(
  setTitle: React.Dispatch<any>,
  setLocation: React.Dispatch<any>,
  setDescription: React.Dispatch<any>,
  setPhoneNumber: React.Dispatch<any>,
  setPrice: React.Dispatch<any>,
  setEmail: React.Dispatch<any>
) {
  const _handleChangeTitle = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setTitle(e.nativeEvent.text);
  };
  const _handleChangeLocation = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setLocation(e.nativeEvent.text);
  };
  const _handleChangeDescription = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setDescription(e.nativeEvent.text);
  };
  const _handleChangePhoneNumber = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPhoneNumber(e.nativeEvent.text);
  };
  const _handleChangePrice = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPrice(e.nativeEvent.text);
  };
  const _handleChangeEmail = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEmail(e.nativeEvent.text);
  };
  return {
    _handleChangeTitle,
    _handleChangeLocation,
    _handleChangeEmail,
    _handleChangeDescription,
    _handleChangePhoneNumber,
    _handleChangePrice,
  };
}
