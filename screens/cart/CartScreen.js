import React, { Component } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { connect } from "react-redux";
import renderCart from "./renderCart";

class CartScreen extends Component {
  render() {
    const cartTotal = this?.props?.cartTotal;
    const carts = this.props?.cartItems;
    const cartItems = () => {
      const transFormedItems = [];
      for (const key in carts) {
        transFormedItems.push({
          productId: key,
          quantity: carts[key].quantity,
          productPrice: carts[key].productPrice,
          productTitle: carts[key].productTitle,
          proDes: carts[key].proDes,
          prodImg: carts[key].product_img,

          sum: carts[key].sum,
        });
      }
      return transFormedItems;
    };
    const currentItems = cartItems();
    // console.log(currentItems);
    return (
      <FlatList
        data={currentItems}
        numColumns={1}
        renderItem={renderCart}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cartTotal: state?.Cart?.totalAmount,
  cartItems: state?.Cart?.items,
});

export default connect(mapStateToProps, {})(CartScreen);
