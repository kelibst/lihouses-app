import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { connect } from "react-redux";
import mainStyles from "../../styles/main";
import { rmFrmFav, RM_FR_FAV } from "../../store/actions/favorites";
import cartStyles from "../../styles/cart";
import RenderCart from "../cart/RenderCart";

class FavoriteList extends Component {
  render() {
    const favorites = this?.props?.favItems;
    const favItems = () => {
      const transFormedItems = [];
      for (const key in favorites) {
        const favItem = favorites[key];
        transFormedItems.push({
          productId: key,
          quantity: favItem.quantity,
          productPrice: favItem.productPrice,
          productTitle: favItem.productTitle,
          proDes: favItem.proDes,
          prodImg: favItem.product_img,
        });
      }
      return transFormedItems;
    };
    let currentFavs = Object.keys(favorites).length ? favItems() : [];
    const { rmFrmFav } = this?.props;
    return (
      <View style={cartStyles.cartsContainer}>
        <FlatList
          data={currentFavs}
          numColumns={1}
          renderItem={(itemData) => (
            <RenderCart
              cartItemDet={{
                quantity: itemData?.item?.quantity,
                productPrice: itemData?.item?.productPrice,
                productTitle: itemData?.item?.productTitle,
                product_img: itemData?.item?.prodImg,
                key: itemData?.item?.productId,
              }}
              onRemove={() => {
                rmFrmFav(itemData?.item?.productId);
              }}
            />
          )}
          keyExtractor={(item) => item.productId}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  favItems: state?.Fav?.favorites,
});

const mapDispatchToProps = (dispatch) => {
  return {
    rmFrmFav: (pid) => dispatch(rmFrmFav(pid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
