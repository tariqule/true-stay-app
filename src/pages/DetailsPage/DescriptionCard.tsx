import React from "react";
import { Linking, Platform, Text, View } from "react-native";
import { themeColorBase } from "../../styles/global-styles";
import { ListViewData } from "../../components/ListCard";
import { Button, Card, Icon } from "react-native-elements";

export function DescriptionCard(_data: ListViewData) {
  return (
    <View>
      <Card>
        <Card.Title>{_data.title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: _data.image }} />
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          {_data.description}
        </Text>
        <Button
          icon={<Icon name="call" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: themeColorBase,
          }}
          containerStyle={{}}
          onPress={() => Linking.openURL(`tel:${_data.phoneNumber}`)}
          title="Call Contact"
        />
        <Button
          icon={<Icon name="message" color="#ffffff" />}
          buttonStyle={{
            marginTop: 10,
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: themeColorBase,
          }}
          containerStyle={{}}
          onPress={() =>
            openSmsUrl(
              _data?.phoneNumber || "",
              "I am in interested in this listing."
            )
          }
          title="Message Contact"
        />
      </Card>
    </View>
  );
}

export function openSmsUrl(phone: string, body: string): Promise<any> {
  return openUrl(`sms:${phone}${getSMSDivider()}body=${body}`);
}

function openUrl(url: string): Promise<any> {
  return Linking.openURL(url);
}

function getSMSDivider(): string {
  return Platform.OS === "ios" ? "&" : "?";
}
