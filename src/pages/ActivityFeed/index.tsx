import {
  Image,
  Button,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  house1,
  house2,
  houses,
  houses1,
  building1,
  building2,
  apartments,
  apartments1,
} from "../../utils/global";
import {
  themeColorBase,
  themeColorIsabelline,
} from "../../styles/global-styles";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
// import { ListView } from "../../componentsListView/index";
import { DETAILSPAGE_SCREEN } from "../../routes";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const fakeData = [
  {
    title: "Toronto",
    amount: "299",
    image: building1,
    // onPress: navigation.navigate(DETAILSPAGE_SCREEN),
  },
  { title: " Scarborough", amount: "300", image: building2 },
  { title: "Downtiwn", amount: "100", image: building1 },
];
const fakeData2 = [
  { title: "Downsview", amount: "2929", image: house1 },
  { title: "North York", amount: "3200", image: houses1 },
  { title: "Downtiwn", amount: "100", image: houses },
];

// interface ListViewProps {
//   data: [] | undefined;
// }props: ListViewProps

function ActivityFeedScreen({ navigation }) {
  const [popularData, setPopularData] = React.useState<[] | undefined>([]);
  const [popularData2, setPopularData2] = React.useState<[] | undefined>([]);

  React.useEffect(() => {
    setPopularData(fakeData);
  }, []);
  React.useEffect(() => {
    setPopularData2(fakeData2);
  }, []);
  return (
    <View
      style={{
        backgroundColor: themeColorBase,
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          // borderWidth: 2,
          marginTop: 40,
          // backgroundColor: "black",
          paddingBottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            // marginTop: 40,
            // borderWidth: 0.5,
            // paddingTop: 50,
            // paddingLeft: 10,
            height: "40%",
            width: "15%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 30,
          }}
          // onPress={() => navigation.navigate()}
        >
          <Ionicons name="md-camera" size={30} color="#000000" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name="md-search"
            size={45}
            color="white"
            style={{ paddingLeft: 275 }}
          />
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: -80 }}>
        Find your place to stay
      </Text>
      <View style={{ height: 20 }}></View>
      <Text style={{ fontSize: 25, paddingBottom: 20 }}>Apartments</Text>

      <ScrollView
        styles={{
          justifyContent: "space-around",
          // paddingLeft: 10,
          padding: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      >
        {popularData?.map((e, i) => (
          <View key={i} style={{ margin: 8 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: screenWidth * 0.35,
                height: screenHeight * 0.25,
                // alignSelf: "center",
                borderRadius: 20,
                // paddingLeft: 10,
                bottom: 0,
              }}
              onPress={() => navigation.navigate(DETAILSPAGE_SCREEN)}
            >
              <Image
                source={e.image}
                style={{ width: "100%", height: "60%", borderRadius: 20 }}
              ></Image>
              <Text
                style={{
                  color: "#BB7A44",
                  // textAlign: "center",
                  padding: 10,
                  fontSize: 14,
                }}
              >
                {e.title}
              </Text>
              <Text
                style={{
                  color: "#BB7A44",
                  textAlign: "right",
                  fontSize: 15,
                }}
              >
                ${e.amount}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* <View style={{ height: 180 }}>
        <ListView data={fakeData} />
      </View> */}

      <Text style={{ fontSize: 25, paddingBottom: 20 }}>Houses</Text>

      <ScrollView
        styles={{
          justifyContent: "space-around",
          // paddingLeft: 10,
          padding: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      >
        {popularData2?.map((e, i) => (
          <View key={i} style={{ margin: 8 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: screenWidth * 0.35,
                height: screenHeight * 0.25,
                // alignSelf: "center",
                borderRadius: 20,
                // paddingLeft: 10,
                bottom: 0,
              }}
              onPress={() => navigation.navigate(DETAILSPAGE_SCREEN)}
            >
              <Image
                source={e.image}
                style={{ width: "100%", height: "60%", borderRadius: 20 }}
              ></Image>
              <Text
                style={{
                  color: "#BB7A44",
                  // textAlign: "center",
                  padding: 10,
                  fontSize: 14,
                }}
              >
                {e.title}
              </Text>
              <Text
                style={{
                  color: "#BB7A44",
                  textAlign: "right",
                  fontSize: 15,
                }}
              >
                ${e.amount}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* <ScrollView
        styles={{
          justifyContent: "space-between",
          paddingRight: 10,
          borderRadius: 20,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: screenWidth * 0.35,
            height: screenHeight * 0.25,
            // alignSelf: "center",
            borderRadius: 20,
            // paddingLeft: 10,
            bottom: 0,
          }}
        >
          <Image
            source={house1}
            style={{ width: "100%", height: "60%", borderRadius: 20 }}
          ></Image>
          <Text
            style={{
              color: "#BB7A44",
              // textAlign: "center",
              padding: 10,
              fontSize: 15,
            }}
          >
            50 Now Street
          </Text>
          <Text
            style={{
              color: "#BB7A44",
              textAlign: "right",
              fontSize: 15,
            }}
          >
            $500
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: screenWidth * 0.35,
            height: screenHeight * 0.25,
            // alignSelf: "center",
            borderRadius: 20,
            // paddingLeft: 10,
            bottom: 0,
          }}
        >
          <Image
            source={house2}
            style={{ width: "100%", height: "60%", borderRadius: 20 }}
          ></Image>
          <Text
            style={{
              color: "#BB7A44",
              // textAlign: "center",
              padding: 10,
              fontSize: 14,
            }}
          >
            931 Progress
          </Text>
          <Text
            style={{
              color: "#BB7A44",
              textAlign: "right",
              fontSize: 15,
            }}
          >
            $500
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: screenWidth * 0.35,
            height: screenHeight * 0.25,
            // alignSelf: "center",
            borderRadius: 20,
            // paddingLeft: 10,
            bottom: 0,
          }}
        >
          <Image
            source={houses1}
            style={{ width: "100%", height: "60%", borderRadius: 20 }}
          ></Image>
          <Text
            style={{
              color: "#BB7A44",
              // textAlign: "center",
              padding: 10,
              fontSize: 14,
            }}
          >
            60 Queen Street
          </Text>
          <Text
            style={{
              color: "#BB7A44",
              textAlign: "right",
              fontSize: 15,
            }}
          >
            $500
          </Text>
        </TouchableOpacity>
      </ScrollView> */}
    </View>
  );
}

export default ActivityFeedScreen;
