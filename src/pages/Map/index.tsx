import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Header } from "react-native-elements";

import MapView, { Marker, ProviderPropType } from "react-native-maps";
import { themeColorBase } from "../../styles/global-styles";
import PriceMarker from "./marker";
import SearchBarMap from "./searchBar";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

class MarkerTypes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
      b: {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 100,
            zIndex: 1000,
            width: "100%",
            // top: 40,
            bottom: 45,
          }}
        >
          <SearchBarMap />
          <Header
            containerStyle={{ backgroundColor: themeColorBase }}
            placement="left"
            leftComponent={{
              icon: "arrow-back",
              color: "#fff",
              onPress: () => this.props.navigation.goBack(),
            }}
          />
        </View>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={this.state.a}
            onSelect={(e) => log("onSelect", e)}
            onDrag={(e) => log("onDrag", e)}
            onDragStart={(e) => log("onDragStart", e)}
            onDragEnd={(e) => log("onDragEnd", e)}
            onPress={(e) => log("onPress", e)}
            draggable
          >
            <PriceMarker amount={99} />
          </Marker>
          <Marker
            coordinate={this.state.b}
            onSelect={(e) => log("onSelect", e)}
            onDrag={(e) => log("onDrag", e)}
            onDragStart={(e) => log("onDragStart", e)}
            onDragEnd={(e) => log("onDragEnd", e)}
            onPress={(e) => log("onPress", e)}
            draggable
          />
        </MapView>
      </View>
    );
  }
}

MarkerTypes.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MarkerTypes;
