import React, { Component } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { rmFrmCart } from "../../store/actions/cart";
import cartStyles from "../../styles/cart";
import utilities from "../../styles/utilities";
import RenderCart from "./RenderCart";

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
    const rmFrmCart = this?.props?.rmFrmCart;
    // console.log(currentItems);
    return (
      <View>
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
              }}
              onRemove={() => {
                rmFrmCart(itemData?.item?.productId);
              }}
            />
          )}
          keyExtractor={(item) => item.productId}
        />
        <TouchableOpacity style={cartStyles.cartBtn}>
          <View>
            <Text style={[utilities?.fontSansBold, cartStyles.cartBtnTxt]}>
              Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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
