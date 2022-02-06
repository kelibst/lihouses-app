import React, { Component } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ToastAndroid,
  TouchableNativeFeedback,
} from "react-native";
import { connect } from "react-redux";
import cardStyles from "../../styles/cards";
import mainStyles from "../../styles/main";
import utilities from "../../styles/utilities";
import Ionicons from "react-native-vector-icons/Ionicons";
import { addToCart } from "../../store/actions/cart";
import { addToFav, rmFrmFav } from "../../store/actions/favorites";

export class HouseOverview extends Component {
  render() {
    const renderData = (itemData) => {
      let Tocmp = TouchableOpacity;
      if (Platform.OS === "android" && Platform.Version >= 21) {
        Tocmp = TouchableNativeFeedback;
      }
      const { addToCart, addToFav, favorites, rmFrmFav } = this?.props;

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
                <View
                  style={[
                    utilities.brTopRtRdsm,
                    utilities.brTopLtRdsm,
                    cardStyles.iconCont,
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => {
                      addToCart(itemData.item);
                      ToastAndroid.show(
                        "Item successfully added to cart!",
                        ToastAndroid.SHORT
                      );
                    }}
                  >
                    <Text style={[cardStyles.btn, cardStyles?.btnCart]}>
                      <Ionicons name="cart-outline" size={30} color="tomato" />
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      itemData?.item?.id in favorites
                        ? rmFrmFav(itemData?.item?.id)
                        : addToFav(itemData.item);
                      ToastAndroid.show(
                        itemData?.item?.id in favorites
                          ? "Item successfully removed from Favorites"
                          : "Item successfully added to favorites!",
                        ToastAndroid.SHORT
                      );
                    }}
                  >
                    <Text style={[cardStyles.btn, cardStyles?.btnCart]}>
                      <Ionicons
                        name={
                          itemData?.item?.id in favorites
                            ? "heart"
                            : "heart-outline"
                        }
                        size={30}
                        color="tomato"
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
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
  favorites: state?.Fav?.favorites,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToFav: (product) => dispatch(addToFav(product)),
    rmFrmFav: (pid) => dispatch(rmFrmFav(pid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseOverview);
