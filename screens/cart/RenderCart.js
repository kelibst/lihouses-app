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
import utilities from "../../styles/utilities";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../constants/Color";

const RenderCart = (props) => {
  let Tocmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Tocmp = TouchableNativeFeedback;
  }
  const item = props?.cartItemDet;
  console.log(item);
  return (
    <View>
      <Tocmp
        useForeground
        onPress={() => {
          // props.navigation.navigate("HouseDetails", {
          //   product_id: item?.product_id,
          //   title: item?.productTitle,
          // });
        }}
      >
        <View style={cartStyles.cartItemCont}>
          <View style={cartStyles.imgContainer}>
            <Image
              style={cardStyles?.image}
              source={{ uri: item?.product_img }}
            />
          </View>
          <View style={utilities?.width100}>
            <Text
              style={[cardStyles.title, utilities?.paddingTopSm]}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {item?.productTitle}
            </Text>
            <Text style={cartStyles?.cartPrice}>
              {item?.productPrice.toFixed(2)}
            </Text>

            <View style={[cartStyles?.cartActions, utilities?.flexRow]}>
              <TouchableOpacity>
                <Ionicons
                  name="heart-outline"
                  size={30}
                  color={Color?.primary}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={cartStyles?.delete}>
                  <Ionicons name="trash" size={30} color={Color?.primary} />
                  <Text style={cartStyles?.deleteText}>REMOVE</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Tocmp>
    </View>
  );
};

export default RenderCart;
