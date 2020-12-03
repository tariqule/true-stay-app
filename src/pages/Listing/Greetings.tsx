import React from "react";
import { Alert } from "react-native";
import { retrieveUser } from "../../utils/Storage";

export function Greetings() {
  React.useEffect(() => {
    retrieveUser().then((user) =>
      Alert.alert(
        `Welcome ${user?.userName}`,
        "Now you are all set. You can start posting your listing!"
      )
    );
  }, []);
}
