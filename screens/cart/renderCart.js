import React from "react";
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

const renderCart = ({ item }) => {
  let Tocmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Tocmp = TouchableNativeFeedback;
  }

  console.log(item, "propsprops");
  return (
    <View
      style={(mainStyles?.gridItem, cardStyles.homeCard, cardStyles.shadows)}
    >
      <Tocmp
        useForeground
        onPress={() => {
          props.navigation.navigate("HouseDetails", {
            product_id: item?.id,
            title: item?.title,
          });
        }}
      >
        <View>
          <View>
            <Image
              style={cartStyles.image}
              source={{ uri: item?.product_img }}
            />
          </View>
          <Text style={cardStyles.title} ellipsizeMode="tail" numberOfLines={1}>
            {item?.title}
          </Text>
        </View>
      </Tocmp>
    </View>
  );
};

export default renderCart;
