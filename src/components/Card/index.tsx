import React, { Component } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

interface CardViewProps {
  title?: string;
  subtitle?: string;
  body?: string;
  image?: any;
  time?: any;
  views?: any;
  avatar?: any;
  onPress?: any;
  disabled?: boolean;
}

const CardView = (props: CardViewProps) => {
  return (
    <TouchableOpacity disabled={props.disabled} onPress={() => props.onPress()}>
      <View>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: props.avatar }} />
              <Body>
                <Text>{props.title}</Text>
                <Text note>{props.subtitle}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem cardBody>
            <Image
              source={{ uri: props.image }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          {!props.disabled && (
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{props.views}</Text>
                </Button>
              </Left>
              <Body>
                {/* <Button transparent>
              <Icon active name="chatbubbles" />
  <Text>{}</Text>
            </Button> */}
              </Body>
              <Right>
                <Text>{props.time}</Text>
              </Right>
            </CardItem>
          )}
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default CardView;
