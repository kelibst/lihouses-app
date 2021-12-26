import React, { Component } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { connect } from "react-redux";
import cardStyles from "../../styles/cards";
import mainStyles from "../../styles/main";

export class HouseOverview extends Component {
  render() {
    const renderData = (itemData) => {
      let Tocmp = TouchableOpacity;
      if (Platform.OS === "android" && Platform.Version >= 21) {
        Tocmp = TouchableNativeFeedback;
      }
      return (
        <View
          style={[
            mainStyles?.gridItem,
            cardStyles.homeCard,
            cardStyles.shadows,
          ]}
        >
          <Tocmp
            useForeground
            onPress={() => {
              this.props.navigation.navigate("HouseDetails", {
                product_id: itemData?.item?.id,
                title: itemData?.item?.title,
              });
            }}
          >
            <View>
              <View style={cardStyles.imgContainer}>
                <Image
                  style={cardStyles.image}
                  source={{ uri: itemData.item.product_img }}
                />
              </View>
              <View style={cardStyles.actions}>
                <Text
                  style={cardStyles.title}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {itemData.item.title}
                </Text>
                <Text style={cardStyles.price}>{itemData.item.price}</Text>
              </View>
            </View>
          </Tocmp>
        </View>
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
