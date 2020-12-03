import * as React from "react";
import { Button, View } from "react-native";
import { ONBOARDING_SCREEN } from "../../routes";
import { styles } from "./index";

export function Footer(navigation: any) {
  return (
    <View style={styles.buttonLogout}>
      <Button
        onPress={() => navigation.navigate(ONBOARDING_SCREEN)}
        title="LOG OUT"
        color="#774936"
      />
    </View>
  );
}
