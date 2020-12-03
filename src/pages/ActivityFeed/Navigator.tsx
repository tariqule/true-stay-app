import * as React from "react";
import Navbar from "../../components/Header";
import { MENU_SCREEN, SEARCH_SCREEN } from "../../routes";

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
