import { AsyncStorage } from "react-native";
const USER = "@seUserInfo@";
const LISTING = "@Listing@";

export const setData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(`@${key}:key`, `${value}`);
    return true;
  } catch (error) {
    return false;
  }
};

export const storeListing = async (params: any) => {
  try {
    await AsyncStorage.setItem(LISTING, JSON.stringify(params));
  } catch (error) {
    console.log(error + " - ERROR FROM STORAGE");
  }
};
export const retrieveListing = async () => {
  try {
    const retrievedItem = await AsyncStorage.getItem("@Listing@");
    const item = retrievedItem && JSON.parse(retrievedItem);
    console.log(
      JSON.stringify(item) +
        " ==> Retrieving data from  [FROM RETRIEVE STORAGE]"
    );
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
};

export const storeUser = async (params: any) => {
  try {
    await AsyncStorage.setItem(USER, JSON.stringify(params));
  } catch (error) {
    console.log(error + " - ERROR FROM STORAGE");
  }
};
export const retrieveUser = async () => {
  try {
    const retrievedItem = await AsyncStorage.getItem(USER);
    const item = retrievedItem && JSON.parse(retrievedItem);
    console.log(
      JSON.stringify(item) +
        " ==> Retrieving data from  [FROM RETRIEVE STORAGE]"
    );
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
};
