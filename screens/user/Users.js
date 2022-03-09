import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Data from "../../DataFile";
import cartStyles from "../../styles/cart";
import AddHouse from "../forms/AddHouse";
import RenderHouse from "../House/RenderHouse";
import HeaderRight from "./HeaderRight";

class Users extends Component {
  state = {
    modalVisible: false,
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  componentDidMount() {
    this.props?.navigation?.setOptions({
      headerTitle: "Keli Booster",
      header: () => (
        <HeaderRight
          navigator={this.props?.navigation}
          modalsVars={{
            modalVisible: this.state?.modalVisible,
            setModalVisible: () =>
              this.setModalVisible(!this.state?.modalVisible),
          }}
        />
      ),
    });
  }

  render() {
    const { userHouses } = this.props;
    console.log("userhouse", userHouses);
    return (
      <View>
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
        <AddHouse
          modalsVars={{
            modalVisible: this.state?.modalVisible,
            setModalVisible: () =>
              this.setModalVisible(!this.state?.modalVisible),
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userHouses: state?.Houses?.userHouses,
});

export default connect(mapStateToProps, {})(Users);
