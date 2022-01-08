import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";

class CartScreen extends Component {
  render() {
    const cartTotal = this?.props?.cartTotal;
    console.log(this?.props.cartItems);
    return (
      <SafeAreaView>
        <View>
          <Text> {cartTotal} in props </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  cartTotal: state?.Cart?.totalAmount,
  cartItems: state?.Cart?.items,
});

export default connect(mapStateToProps, {})(CartScreen);
