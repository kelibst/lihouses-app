import React, { Component } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
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
    return (
      <FlatList
        data={this?.props?.availableHouses}
        numColumns={2}
        renderItem={renderData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  availableHouses: state?.Houses?.availableHouses,
});

export default connect(mapStateToProps, {})(HouseOverview);
