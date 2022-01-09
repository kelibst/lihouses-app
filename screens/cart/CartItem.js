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
import cardStyles from "../../styles/cards";
import cartStyles from "../../styles/cart";
import mainStyles from "../../styles/main";

export class CartItem extends Component {
  render() {
    const cartCont = this?.props?.cartItem;
    let Tocmp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
      Tocmp = TouchableNativeFeedback;
    }
    return (
      <View
        style={(mainStyles?.gridItem, cardStyles.homeCard, cardStyles.shadows)}
      >
        <Tocmp
          useForeground
          onPress={() => {
            this.props.navigation.navigate("HouseDetails", {
              product_id: cartCont?.id,
              title: cartCont?.title,
            });
          }}
        >
          <View>
            <Image
              style={cartStyles.image}
              source={{ uri: cartCont?.product_img }}
            />
          </View>
          <Text style={cardStyles.title} ellipsizeMode="tail" numberOfLines={1}>
            {cartCont.title}
          </Text>
        </Tocmp>
      </View>
    );
  }
}

export default CartItem;
