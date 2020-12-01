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
} from "native-base";
import { ListViewProps, ListViewData } from "./index";
import { useNavigation } from "@react-navigation/native";
import { DETAILSPAGE_SCREEN } from "../../routes";

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
      <Card style={{ flex: 0, width: 230, height: 400 }} key={index}>
        {Location()}
        {Description()}
      </Card>
    </TouchableOpacity>
  );

  function Description() {
    return (
      <CardItem>
        <Body>
          <Image
            source={{
              uri: item.image || "",
            }}
            style={{ height: 200, width: 200 }}
          />
          <Text style={{ height: 70 }}>
            {item.description?.substring(0, 50).concat("...")}
          </Text>
          <Right>
            <Text style={{}}> ${item.amount}</Text>
          </Right>
        </Body>
      </CardItem>
    );
  }

  function Location() {
    return (
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: item.landlordAvatar }} />
          <Body>
            <Text>{item.location}</Text>
          </Body>
        </Left>
      </CardItem>
    );
  }
}
