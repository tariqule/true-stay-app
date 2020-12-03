import { useNavigation } from "@react-navigation/native";
import { Container } from "native-base";
import * as React from "react";
import { ListViewData } from "../../components/ListCard";
import {
  screenHeight,
  screenWidth,
  themeColorBase,
} from "../../styles/global-styles";
import { DataLoader } from "./DataLoader";
import { Navigator } from "./Navigator";
import { PageContent } from "./PageContent";

export function ActivityFeedScreen() {
  const [popularData, setPopularData] = React.useState<ListViewData[]>([]);
  const [popularData2, setPopularData2] = React.useState<ListViewData[]>([]);
  const navigation = useNavigation();
  DataLoader(setPopularData, setPopularData2);
  return (
    <Container style={{ flex: 1 }}>
      {Navigator(navigation)}
      <Container style={GlobalStyles.ContentContainer}>
        {PageContent(popularData, popularData2)}
      </Container>
    </Container>
  );
}
