import { Container, Content } from "native-base";
import * as React from "react";
import { Text, View } from "react-native";
import Navbar from "../../components/Header";
import ListCard, { ListViewData } from "../../components/ListCard";
import { MENU_SCREEN, SEARCH_SCREEN } from "../../routes";
import { themeColorBase } from "../../styles/global-styles";
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
    <Container
      style={{
        backgroundColor: themeColorBase,
        height: screenHeight,
        width: screenWidth,
        paddingLeft: 10,
      }}
    >
      {Navigator(navigation)}
      {PageContent(popularData, popularData2)}
    </Container>
  );
}
function PageContent(aData: ListViewData[], hData: ListViewData[]) {
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

function ContentTitle(text: string) {
  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: 40,

          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </View>
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
