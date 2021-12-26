import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

export class HouseDetails extends Component {
  render() {
    const product_id = this.props?.route?.params?.product_id;
    const curProd = this?.props?.availableHouses.find(
      (prod) => prod.id === product_id
    );

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> This is the house details screen </Text>
      </View>
    );
  }
}

HouseDetails.navigationOptions = () => {
  return {
    headerTitle: "Details Screen",
  };
};
const mapStateToProps = (state) => ({
  availableHouses: state?.Houses?.availableHouses,
});
export default connect(mapStateToProps, {})(HouseDetails);
