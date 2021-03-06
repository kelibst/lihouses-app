import React, { Component } from "react";
import { FlatList } from "react-native";
import { addToCart } from "../../store/actions/cart";
import { addToFav, rmFrmFav } from "../../store/actions/favorites";
import RenderHouse from "./RenderHouse";
import { connect } from "react-redux";

export class HouseOverview extends Component {
  render() {
    const { addToCart, addToFav, rmFrmFav } = this.props;
    return (
      <FlatList
        data={this?.props?.availableHouses}
        numColumns={2}
        renderItem={(itemData) => (
          <RenderHouse
            houseItem={{
              product_id: itemData?.item?.id,
              title: itemData?.item?.title,
              image: itemData.item.product_img,
              price: itemData.item.price,
            }}
            onAddToCart={() => {
              addToCart(itemData?.item);
            }}
            onRmFrmFav={() => {
              rmFrmFav(itemData?.item?.id);
            }}
            onAddToFav={() => {
              addToFav(itemData?.item);
            }}
            navigator={this.props?.navigation}
            route={this?.props?.route}
          />
        )}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  availableHouses: state?.Houses?.availableHouses,
  favorites: state?.Fav?.favorites,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addToFav: (product) => dispatch(addToFav(product)),
    rmFrmFav: (pid) => dispatch(rmFrmFav(pid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseOverview);
