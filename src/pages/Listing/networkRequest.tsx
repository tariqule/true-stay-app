import React from "react";
import { LANDLORD_LISTINGS } from "../../routes";
import { retrieveListing, storeListing } from "../../utils/Storage";

export function networkRequest(
  title: any,
  description: any,
  location: any,
  email: any,
  price: any,
  phoneNumber: any,
  image: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigation: any
) {
  setTimeout(() => {
    retrieveListing().then((listing) => {
      listing
        ? storeListing({
            ...listing,
            ...{
              title,
              description,
              location,
              email,
              price,
              phoneNumber,
              image,
            },
          })
        : storeListing({
            title,
            description,
            location,
            email,
            price,
            phoneNumber,
            image,
          });
    });

    setLoading(false);
    () => navigation.navigate(LANDLORD_LISTINGS);
  }, 3200);
}
