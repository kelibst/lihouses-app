import React, { Component } from "react";
import { render } from "react-dom";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ToastAndroid,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import { connect } from "react-redux";
import cardStyles from "../../styles/cards";
import mainStyles from "../../styles/main";
import utilities from "../../styles/utilities";
import Ionicons from "react-native-vector-icons/Ionicons";

const renderData = (props) => {
  let Tocmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Tocmp = TouchableNativeFeedback;
  }

  const { onAddToCart, onAddToFav, favorites, onRmFrmFav, houseItem } = props;
  return (
    <View
      style={[mainStyles?.gridItem, cardStyles.homeCard, cardStyles.shadows]}
    >
      <Tocmp
        useForeground
        onPress={() => {
          props?.navigator.navigate("HouseDetails", {
            product_id: houseItem?.product_id,
            title: houseItem?.title,
          });
        }}
      >
        <View>
          <View style={cardStyles.imgContainer}>
            <Image
              style={cardStyles.image}
              source={{ uri: houseItem?.image }}
            />
            {props?.route?.name != "user" && (
              <View
                style={[
                  utilities.brTopRtRdsm,
                  utilities.brTopLtRdsm,
                  cardStyles.iconCont,
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    onAddToCart();
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
                    houseItem?.product_id in favorites
                      ? onRmFrmFav()
                      : onAddToFav();
                    ToastAndroid.show(
                      houseItem?.product_id in favorites
                        ? "Item successfully removed from Favorites"
                        : "Item successfully added to favorites!",
                      ToastAndroid.SHORT
                    );
                  }}
                >
                  <Text style={[cardStyles.btn, cardStyles?.btnCart]}>
                    <Ionicons
                      name={
                        houseItem?.product_id in favorites
                          ? "heart"
                          : "heart-outline"
                      }
                      size={30}
                      color="tomato"
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={cardStyles.actions}>
            <Text
              style={cardStyles.title}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {houseItem?.title}
            </Text>
            <Text style={cardStyles.price}>{houseItem?.price}</Text>
          </View>
        </View>
      </Tocmp>
    </View>
  );
};

const mapStateToProps = (state) => ({
  availableHouses: state?.Houses?.availableHouses,
  favorites: state?.Fav?.favorites,
});

export default connect(mapStateToProps, {})(renderData);
