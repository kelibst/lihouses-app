import React, { Component } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Data from "../../DataFile";
import cartStyles from "../../styles/cart";
import RenderHouse from "../House/RenderHouse";

class Users extends Component {
  render() {
    const { userHouses, addToCart, addToFav, rmFrmFav } = this.props;
    console.log(this.props);
    return (
      <FlatList
        data={userHouses}
        numColumns={2}
        renderItem={(itemData) => (
          <RenderHouse
            houseItem={{
              product_id: itemData?.item?.id,
              title: itemData?.item?.title,
              image: itemData.item.product_img,
              price: itemData.item.price,
            }}
            onAddToCart={() => {}}
            onRmFrmFav={() => {}}
            onAddToFav={() => {}}
          />
        )}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userHouses: state?.Houses?.userHouses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToFav: (product) => dispatch(addToFav(product)),
    rmFrmFav: (pid) => dispatch(rmFrmFav(pid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
