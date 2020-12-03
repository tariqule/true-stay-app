import { Container, Content } from "native-base";
import * as React from "react";
import { Text, View } from "react-native";
import Navbar from "../../components/Header";
import ListCard, { ListViewData } from "../../components/ListCard";
import { MENU_SCREEN, SEARCH_SCREEN } from "../../routes";
import {
  GlobalStyles,
  themeColorBase,
  themeColorPeach,
} from "../../styles/global-styles";
import { fakeData, fakeData2, screenHeight, screenWidth } from "./index";

// interface ListViewProps {
//   data: [] | undefined;
// }props: ListViewProps
export function ActivityFeedScreen({ navigation }) {
  const [popularData, setPopularData] = React.useState<ListViewData[]>([]);
  const [popularData2, setPopularData2] = React.useState<ListViewData[]>([]);

  React.useEffect(() => {
    setPopularData(fakeData);
  }, []);
  React.useEffect(() => {
    setPopularData2(fakeData2);
  }, []);
  return (
    <Container style={{ flex: 1 }}>
      {Navigator(navigation)}
      <Container style={GlobalStyles.ContentContainer}>
        {PageContent(popularData, popularData2)}
      </Container>
    </Container>
  );
}
function PageContent(aData: ListViewData[], hData: ListViewData[]) {
  return (
    <Content>
      <View>
        <Text style={GlobalStyles.H1}>Apartment</Text>
        <ListCard data={aData} />
      </View>

      <View>
        <Text style={GlobalStyles.H1}>House</Text>
        <ListCard data={hData} />
      </View>

    </Content>
  );
}

function Navigator(navigation: any) {
  return (
    <Navbar
      headerTitle={"Find your place to stay"}
      showMenu
      onPressMenu={() => navigation.navigate(MENU_SCREEN)}
      onPressSearchIcon={() => navigation.navigate(SEARCH_SCREEN)}
      showSearchIcon
    />
  );
}
