import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Card,
  Thumbnail,
  Text,
  Button,
  // Icon,
  Left,
  Body,
  CardItem,
  Icon,
  Right,
  View,
} from "native-base";
import { ListViewProps, ListViewData } from "./index";
import { useNavigation } from "@react-navigation/native";
import { DETAILSPAGE_SCREEN } from "../../routes";
import {
  fontColorBlack,
  screenHeight,
  screenWidth,
  themeColorBase,
  themeColorIsabelline,
  themeColorPuff,
} from "../../styles/global-styles";
import { normalize } from "react-native-elements";

export function CardItemList({
  index,
  props,
  item,
}: {
  index: number;
  props: ListViewProps;
  item: ListViewData;
}): JSX.Element {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(DETAILSPAGE_SCREEN, { data: item })}
    >
      <Card
        style={{
          width: screenWidth * 0.5,
          height: screenWidth * 0.5,
          alignContent: "center",
          alignItems: "center",
          borderRadius: normalize(15),
          elevation:1,
          shadowColor: themeColorBase,
          backgroundColor: themeColorPuff,
          shadowOpacity: 1,
          shadowRadius: 4
        }}
        key={index}
      >
        {Location()}
        {Description()}
      </Card>
    </TouchableOpacity>
  );

  function Description() {
    return (
      <CardItem style={{ height: "100%", backgroundColor: themeColorIsabelline }}>
        <Body>
            <Image
              style={{ width:"60%", height:"60%", alignSelf:"center" }}
              resizeMode={"cover"}
              source={{
                uri: item.image || "",
              }}
            />
          <View style={{ height: "40%" }}>
            <Text style={{fontSize: normalize(10)}} >
              {item.description?.substring(0, 80).concat("...")}
            </Text>
            <Right>
              <Text style={{fontSize: normalize(14), fontWeight:"bold", color:"green" }}> ${item.amount}</Text>
            </Right>
          </View>
        </Body>
      </CardItem>
    );
  }

  function Location() {
    return (
      <CardItem
        style={{height: "10%",alignItems:"center", backgroundColor: themeColorPuff }}
      >
            <Text style={{fontSize: normalize(14), fontWeight:"bold", color:themeColorBase}}>{item.location}</Text>
      </CardItem>
    );
  }
}
