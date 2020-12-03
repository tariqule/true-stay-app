import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { themeColorBase } from "../../styles/global-styles";

interface HeaderProps {
  headerTitle?: string;
  onPress?: (event: Event) => void;
  onPressAddIcon?: (event: Event) => void;
  showAddIcon?: boolean;
  showBack?: boolean;
  showMenu?: boolean;
  onPressMenu?: (event: Event) => void;
  showSearchIcon?: boolean;
  onPressSearchIcon?: (event: Event) => void;
  showViewIcon?: boolean;
  onPressViewIcon?: (event: Event) => void;
  showProfile?: boolean;
  onPressProfile?: (event: Event) => void;
}

const Navbar = (props: HeaderProps) => {
  const navigation = useNavigation();
  return (
    // <Container>
    <Header
      noShadow
      span
      hasSubtitle={true}
      style={{ backgroundColor: themeColorBase, top: 20, zIndex: 10 }}
    >
      <StatusBar barStyle="light-content" />
      <Left style={{ flex: 1 }}>
        {props.showBack && (
          <Button transparent>
            <Icon
              name="arrow-back"
              onPress={
                props.onPress ? props.onPress : () => navigation.goBack()
              }
            />
          </Button>
        )}
        {props.showMenu && (
          <Button transparent>
            <Icon
              name="menu"
              onPress={props.onPressMenu}
              style={{ fontSize: 30 }}
            />
          </Button>
        )}
        {props.showProfile && (
          <Button transparent>
            <Icon
              type="AntDesign"
              name="profile"
              onPress={props.onPressProfile}
              style={{ fontSize: 30 }}
            />
          </Button>
        )}
      </Left>

      <Body style={{ flex: 4 }}>
        <Title style={{ fontSize: 25, fontWeight: "bold" }}>
          {props.headerTitle}
        </Title>
      </Body>

      <Right>
        {props.showAddIcon && (
          <Button transparent>
            <Icon name="add" onPress={props.onPressAddIcon} />
          </Button>
        )}
        {props.showSearchIcon && (
          <Button transparent>
            <Icon
              name="search"
              onPress={props.onPressSearchIcon}
              style={{ fontSize: 30 }}
            />
          </Button>
        )}
        {props.showViewIcon && (
          <Button transparent>
            <Icon
              name="view-day"
              type="MaterialIcons"
              onPress={props.onPressViewIcon}
              style={{ fontSize: 30 }}
            />
          </Button>
        )}
      </Right>
    </Header>
    // </Container>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
