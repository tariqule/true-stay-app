import { Content } from "native-base";
import * as React from "react";
import { Text, View } from "react-native";
import ListCard, { ListViewData } from "../../components/ListCard";
import { ContentTitle } from "./ContentTitle";

export function PageContent(aData: ListViewData[], hData: ListViewData[]) {
  return (
    <Content>
      <View style={{}}>
        <Text
          style={{
            fontSize: 40,

            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {ContentTitle("Apartment")}
        </Text>
      </View>

      <ListCard data={aData} />

      {ContentTitle("Houses")}
      <ListCard data={hData} />
    </Content>
  );
}
