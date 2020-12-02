import React from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../styles/global-styles";
import { ListViewData } from "../../components/ListCard";
import { Card } from "react-native-elements";

export function UnitCard(_data: ListViewData) {
  return (
    <View style={{ flex: 2 }}>
      <Card>
        <Card.Title> Unit Info </Card.Title>

        <Text style={GlobalStyles.H2}> Location </Text>
        <Text style={GlobalStyles.DataFont}>{_data.location} </Text>
      </Card>
    </View>
  );
}
