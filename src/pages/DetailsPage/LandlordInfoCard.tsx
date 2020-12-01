import React from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../styles/global-styles";
import { ListViewData } from "../../components/ListCard";
import { Card } from "react-native-elements";

export function LandlordInfoCard(_data: ListViewData) {
  return (
    <View style={{ flex: 1 }}>
      <Card>
        <Card.Title> Landlord Info </Card.Title>

        <Text style={GlobalStyles.H2}> Name </Text>
        <Text style={GlobalStyles.DataFont}>{_data.name} </Text>
        <Text style={GlobalStyles.H2}> Phone Number </Text>
        <Text style={GlobalStyles.DataFont}>{_data.phoneNumber} </Text>
        <Text style={GlobalStyles.H2}> E-Mail </Text>
        <Text style={GlobalStyles.DataFont}>{_data.email}</Text>
      </Card>
    </View>
  );
}
