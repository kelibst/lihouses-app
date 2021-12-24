import React, { Component } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import cardStyles from "../../styles/cards";
import mainStyles from "../../styles/main";

export class HouseOverview extends Component {
  render() {
    const renderData = (itemData) => {
      return (
        <TouchableOpacity
          style={[mainStyles?.gridItem, cardStyles.homeCard]}
          onPress={() => {
            this.props.navigation.navigate("House");
          }}
        >
          <View>
            <Image
              style={cardStyles.image}
              source={{ uri: itemData.item.product_img }}
            />
            <Text style={cardStyles.title}>{itemData.item.title}</Text>
            <Text style={cardStyles.price}>{itemData.item.price}</Text>
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
