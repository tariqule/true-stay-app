import { Card, Container, Content } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CardView from "../../components/Card";
import Navbar from "../../components/Header";
import {
  MODIFYLISTING_SCREEN,
  POSTLISTING_SCREEN,
  PROFILE_SCREEN,
  PROFILE_VIEW,
} from "../../routes";
import { themeColorBg } from "../../styles/global-styles";
import { retrieveListing, retrieveUser } from "../../utils/Storage";
import * as ImagePicker from "expo-image-picker";

import moment from "moment";
const LandlordListingsScreen = ({ navigation }) => {
  const data = [
    {
      title: "632 Yong st",
      subtitle: "Toronto",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore recusandae earum alias odio beatae consequatur perferendis nulla magnam repudiandae officiis animi, illo minima, sit exercitationem eius, quasi dignissimos amet?",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg?crop=1.00xw:0.752xh;0,0.120xh&resize=1200:*",
      time: "23 Nov",
      views: "323 Views",
      avatar:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
      onPress: () => navigation.navigate(MODIFYLISTING_SCREEN),
    },
    {
      title: "34 Scarborough st",
      subtitle: "Toronto",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore recusandae earum alias odio beatae consequatur perferendis nulla magnam repudiandae officiis animi, illo minima, sit exercitationem eius, quasi dignissimos amet?",
      image:
        "https://www.investopedia.com/thmb/-vXbA11haoF5XnwDr_DAXP2Bj2I=/380x254/filters:fill(auto,1)/8_house_hunting_mistakes-5bfc3cc3c9e77c002634c244.jpg",
      // time: "23 Nov",
      views: "323 Views",
      avatar:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
      onPress: () => navigation.navigate(MODIFYLISTING_SCREEN),
    },
  ];

  const [listings, setListings] = React.useState<[] | any>();
  const [userInfo, setUserInfo] = React.useState<any>();

  useEffect(() => {
    retrieveUser().then((user) => setUserInfo(user));
    retrieveListing().then((list) => {
      setListings(list);
      console.log(JSON.stringify(list));
    });
  }, []);

  const showData = listings;
  return (
    <Container>
      <Navbar
        headerTitle="Your Listings"
        onPress={() => navigation.goBack()}
        onPressAddIcon={() =>
          navigation.navigate(POSTLISTING_SCREEN, { newUser: false })
        }
        showProfile
        showAddIcon
        onPressProfile={() => navigation.navigate(PROFILE_VIEW)}
      />
      <Content style={{ backgroundColor: themeColorBg }}>
        {showData?.length > 0 ? (
          showData?.map(
            (
              item: {
                description: string;
                title: string;
                image: any;
                subtitle: string;
                views: any;
                time: any;
                avatar: any;
                onPress: any;
              },
              index: any
            ) => (
              <CardView
                key={index}
                body={item.description}
                title={item.title}
                image={item.image}
                subtitle={item.subtitle}
                views={item.views || "0"}
                time={item.time || moment().format("MMM Do YY")}
                avatar={
                  item.avatar ||
                  "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
                }
                onPress={(o: any) =>
                  navigation.navigate(MODIFYLISTING_SCREEN, { item })
                }
              />
            )
          )
        ) : (
          <CardView
            disabled={true}
            title={"You don't have any Listings"}
            subtitle={
              "To make listing click on the + on the top right of the screen."
            }
          />
        )}
      </Content>
    </Container>
  );
};

export default LandlordListingsScreen;

const styles = StyleSheet.create({});
