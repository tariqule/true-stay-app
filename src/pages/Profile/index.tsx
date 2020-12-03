import * as React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheet } from "react-native-elements";
import { color } from "react-native-reanimated";
import { Avatar } from "react-native-elements";
import { themeColorBase, themeColorPuff } from "../../styles/global-styles";
import Navbar from "../../components/Header";
import { retrieveUser } from "../../utils/Storage";
import { PROFILE_SCREEN } from "../../routes";
import { Container, Content } from "native-base";

export const ProfileScreen = (props: any) => {
  const [userInfo, setUserInfo] = React.useState<any>();

  React.useEffect(() => {
    retrieveUser().then((user) => setUserInfo(user));
  }, []);

  return (
    <Container style={styles.bachgrd}>
      <Navbar headerTitle="Profile" showBack />
      <Content>
        <View style={styles.header}>
          {/* <Avatar
          rounded
          icon={{
            name: "chevron-left",
            type: "font-awesome",
            color: "#0077B6",
          }}
        />
        <Text style={styles.textHeader}>PROFILE</Text> */}
        </View>
        <View style={styles.textBox}>
          <Avatar
            rounded
            icon={{ name: "user", type: "font-awesome", color: "#0077B6" }}
          />
          <Text style={styles.textName}>
            {userInfo?.userName || "Name Not Found"}
          </Text>
          <Avatar
            rounded
            icon={{ name: "plus", type: "font-awesome", color: "#0077B6" }}
            //onPress={() => props.navigation.navigate('MenuScreen')}
          />
        </View>
        <View>
          <Text style={styles.textAddress}>Current Location: Toronto</Text>
        </View>
        <View>
          <Text style={styles.textBox}>
            Hi! My name is John, I’m a creative geek from San Francisco, CA. I
            enjoy creating eye candy solutions for web and mobile apps. Contact
            me any time
          </Text>
        </View>
        <View style={styles.stuffContainer}>
          <Text style={styles.stuff}>
            0{"\n"}
            Projects
          </Text>
          <Text style={styles.stuff}>
            0{"\n"}
            Followers
          </Text>
          <Text style={styles.stuff}>
            0{"\n"}
            Following
          </Text>
        </View>
        <View>
          <Text style={styles.textContact}>Contact info:</Text>
          <Text style={styles.textContactDetails}>Phone#</Text>
          <Text style={styles.textContactDetails}>E-mail:</Text>
        </View>
        <View style={styles.button}>
          <Button
            //where should it go?
            onPress={() => props.navigation.navigate(PROFILE_SCREEN)}
            title="Edit Profile"
          />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  bachgrd: {
    backgroundColor: "#FEFFD6",
    //color: "#0077B6"
  },
  header: {
    // marginTop: "10%",
    color: "#0077B6",
    flexDirection: "row",
    alignItems: "stretch",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0077B6",
    alignSelf: "center",
  },
  textBox: {
    paddingTop: 40,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    color: "#0077B6",
  },
  textName: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#0077B6",
  },
  textAddress: {
    padding: 10,
    paddingLeft: 50,
    color: "#0077B6",
  },
  textBody: {
    fontStyle: "normal",
    alignItems: "stretch",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    color: "#0077B6",
  },
  stuff: {
    flexDirection: "row",
    alignItems: "stretch",
    color: "#0077B6",
    backgroundColor: "#CAF0F8",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  stuffContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "stretch",
    position: "relative",
  },
  textContact: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#0077B6",
    alignSelf: "center",
  },
  textContactDetails: {
    padding: 10,
    paddingLeft: 30,
    color: "#0077B6",
    fontWeight: "bold",
  },
  button: {
    fontStyle: "normal",
    width: "100%",
    alignItems: "flex-end",
    paddingEnd: 10,
    paddingBottom: 10,
    marginBottom: "10%",
  },
});

export default ProfileScreen;
