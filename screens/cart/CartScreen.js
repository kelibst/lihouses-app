import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Color from "../../constants/Color";
import { rmFrmCart } from "../../store/actions/cart";
import cartStyles from "../../styles/cart";
import RenderCart from "./RenderCart";

class CartScreen extends Component {
  render() {
    const cartTotal = this?.props?.cartTotal;
    const carts = this.props?.cartItems;
    const cartItems = () => {
      const transFormedItems = [];
      for (const key in carts) {
        const cartItem = carts[key];
        transFormedItems.push({
          productId: key,
          quantity: cartItem.quantity,
          productPrice: cartItem.productPrice,
          productTitle: cartItem.productTitle,
          proDes: cartItem.proDes,
          prodImg: cartItem.product_img,

          sum: cartItem.sum,
        });
      }
      return transFormedItems;
    };
    const currentItems = cartItems();
    const rmFrmCart = this?.props?.rmFrmCart;
    return (
      <View style={cartStyles.cartsContainer}>
        <FlatList
          data={currentItems}
          numColumns={1}
          renderItem={(itemData) => (
            <RenderCart
              cartItemDet={{
                quantity: itemData?.item?.quantity,
                productPrice: itemData?.item?.productPrice,
                productTitle: itemData?.item?.productTitle,
                product_img: itemData?.item?.prodImg,
                sum: itemData?.item?.sum,
                key: itemData?.item?.productId,
              }}
              onRemove={() => {
                rmFrmCart(itemData?.item?.productId);
              }}
            />
          )}
          keyExtractor={(item) => item.productId}
        />

        <TouchableOpacity
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 10,
            backgroundColor: Color.primary,
          }}
        >
          <View>
            <Text style={cartStyles.cartBtnTxt}>
              Order {this?.props?.cartTotal}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cartBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: Color.primary,
  },
});

const mapStateToProps = (state) => ({
  cartTotal: state?.Cart?.totalAmount,
  cartItems: state?.Cart?.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    rmFrmCart: (pid) => dispatch(rmFrmCart(pid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
