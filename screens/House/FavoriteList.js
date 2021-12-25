import React, { Component } from "react";
import { Text, View } from "react-native";
import mainStyles from "../../styles/main";

export default class FavoriteList extends Component {
  render() {
    return (
      <View style={mainStyles.container}>
        <Text> This is the favorite list compoenent textInComponent </Text>
      </View>
    );
  }
}
