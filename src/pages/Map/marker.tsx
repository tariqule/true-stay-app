import PropTypes from "prop-types";
import React from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import { themeColorBase } from "../../styles/global-styles";

const propTypes = {
  amount: PropTypes.number.isRequired,
  fontSize: PropTypes.number,
};

const defaultProps = {
  fontSize: 13,
};
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

class PriceMarker extends React.Component {
  render() {
    const { fontSize, amount } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <Card>
            <Card.Title>2 Bed Room House available for rent</Card.Title>
            <Text>5 mins away</Text>

            <Card.Divider />
            <Card.Image
              source={{
                uri:
                  "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg",
              }}
            >
              <Button
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  backgroundColor: themeColorBase,
                }}
                title="VIEW NOW"
              />
            </Card.Image>
          </Card>
          <Text style={styles.dollar}>$</Text>
          <Text style={[styles.amount, { fontSize }]}>{amount}</Text>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  }
}

PriceMarker.propTypes = propTypes;
PriceMarker.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  bubble: {
    flex: 0,
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    padding: 2,
    borderRadius: 3,
    borderColor: "transparent",
    borderWidth: 0.5,
  },
  dollar: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 13,
  },
  arrow: {
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: "transparent",
    borderTopColor: "#FF5A5F",
    alignSelf: "center",
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: "transparent",
    borderTopColor: "#D23F44",
    alignSelf: "center",
    marginTop: -0.5,
  },
});

export default PriceMarker;
