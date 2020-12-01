import { GestureResponderEvent } from "react-native";
import { ListCard } from "./ListCard";

export interface ListViewProps {
  data?: ListViewData[];
}

export interface ListViewData {
  landlordAvatar: any;
  title: string;
  listImage?: any;
  description?: string;
  image?: any;
  location?: string;
  amount?: any;
  name?: string;
  phoneNumber?: string;
  email?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default ListCard;
