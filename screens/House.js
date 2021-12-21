import React, { Component } from "react";
import { Text, View } from "react-native";

export class House extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> This is the house component </Text>
      </View>
    );
  }
}

export default House;
