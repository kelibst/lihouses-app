import React, { Component } from "react";
import { Button, FlatList, Text, View } from "react-native";
import Data from "../DataFile";
import mainStyles from "../styles/main";
const renderData = (itemData) => {
  return (
    <View style={mainStyles.gridItem}>
      <Text>{itemData.item.name}</Text>
    </View>
  );
};
export class Homepage extends Component {
  render() {
    return <FlatList data={Data} numColumns={2} renderItem={renderData} />;
  }
}

export default Homepage;
