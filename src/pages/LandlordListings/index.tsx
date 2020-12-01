import { Card, Container, Content } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardView from "../../components/Card";
import Navbar from "../../components/Header";
import { MODIFYLISTING_SCREEN, POSTLISTING_SCREEN } from "../../routes";
import { themeColorBg } from "../../styles/global-styles";

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
      time: "23 Nov",
      views: "323 Views",
      avatar:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
      onPress: () => navigation.navigate(MODIFYLISTING_SCREEN),
    },
  ];
  return (
    <Container>
      <Navbar
        headerTitle="Your Listings"
        onPress={() => navigation.goBack()}
        onPressAddIcon={() => navigation.navigate(POSTLISTING_SCREEN)}
        showAddIcon
      />
      <Content style={{ backgroundColor: themeColorBg }}>
        {data.map((item, index) => (
          <CardView
            body={item.body}
            title={item.title}
            image={item.image}
            subtitle={item.subtitle}
            views={item.views}
            time={item.time}
            avatar={item.avatar}
            onPress={item.onPress}
          />
        ))}
      </Content>
    </Container>
  );
};

export default LandlordListingsScreen;

const styles = StyleSheet.create({});
