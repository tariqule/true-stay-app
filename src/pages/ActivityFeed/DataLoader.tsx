import * as React from "react";
import { fakeData } from ".";
import { ListViewData } from "../../components/ListCard";

export function DataLoader(
  setPopularData: React.Dispatch<React.SetStateAction<ListViewData[]>>,
  setPopularData2: React.Dispatch<React.SetStateAction<ListViewData[]>>
) {
  React.useEffect(() => {
    setPopularData(fakeData);
  }, []);
  React.useEffect(() => {
    setPopularData2(fakeData);
  }, []);
}
