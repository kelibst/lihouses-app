import React, { Component } from "react";
import { FlatList } from "react-native";
import { addToCart } from "../../store/actions/cart";
import { addToFav, rmFrmFav } from "../../store/actions/favorites";
import RenderHouse from "./RenderHouse";

export class HouseOverview extends Component {
  render() {
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
