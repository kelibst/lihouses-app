import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Data from "../../DataFile";
import cartStyles from "../../styles/cart";
import RenderHouse from "../House/RenderHouse";
import HeaderRight from "./HeaderRight";

class Users extends Component {
  componentDidMount() {
    this.props?.navigation?.setOptions({
      headerTitle: "Keli Booster",
      header: (props) => <HeaderRight />,
    });
  }
  render() {
    const { userHouses } = this.props;

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
            navigator={this.props?.navigation}
            route={this?.props?.route}
          />
        )}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  userHouses: state?.Houses?.userHouses,
});

export default connect(mapStateToProps, {})(Users);
