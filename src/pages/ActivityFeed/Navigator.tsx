import * as React from "react";
import { MENU_SCREEN, SEARCH_SCREEN } from "../../routes";
import Navbar from "../../components/Header";

export function Navigator(navigation: any) {
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
