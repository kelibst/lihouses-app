import React, { Component } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import Data from "../../DataFile";
import mainStyles from "../../styles/main";

export class HouseOverview extends Component {
  render() {
    const renderData = (itemData) => {
      return (
        <TouchableOpacity
          style={mainStyles.gridItem}
          onPress={() => {
            this.props.navigation.navigate("House");
          }}
        >
          <View>
            <Text>{itemData.item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return <FlatList data={Data} numColumns={2} renderItem={renderData} />;
  }
}

export default HouseOverview;
