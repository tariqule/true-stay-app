import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export function inputChangeHandler(
  setTitle: React.Dispatch<any>,
  setLocation: React.Dispatch<any>,
  setDescription: React.Dispatch<any>,
  setPhoneNumber: React.Dispatch<any>,
  setPrice: React.Dispatch<any>,
  setEmail: React.Dispatch<any>
) {
  const _handleChangeTitle = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setTitle(e.nativeEvent.text);
  };
  const _handleChangeLocation = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setLocation(e.nativeEvent.text);
  };
  const _handleChangeDescription = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setDescription(e.nativeEvent.text);
  };
  const _handleChangePhoneNumber = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPhoneNumber(e.nativeEvent.text);
  };
  const _handleChangePrice = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPrice(e.nativeEvent.text);
  };
  const _handleChangeEmail = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEmail(e.nativeEvent.text);
  };
  return {
    _handleChangeTitle,
    _handleChangeLocation,
    _handleChangeEmail,
    _handleChangeDescription,
    _handleChangePhoneNumber,
    _handleChangePrice,
  };
}
