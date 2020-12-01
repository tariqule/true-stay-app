import React from "react";
import { View, ScrollView } from "react-native";
import { CardItemList } from "./CardItemList";
import { ListViewProps, ListViewData } from "./index";

export function ListCard(props: ListViewProps) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
      {props.data?.map((item: ListViewData, index) =>
        CardItemList({ index, props, item })
      )}
    </ScrollView>
  );
}
