import React, { Component } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Data from "../../DataFile";
import cartStyles from "../../styles/cart";

class Users extends Component {
  render() {
    const { userHouses } = this.props;
    return (
      <View style={cartStyles.cartsContainer}>
        {/* <FlatList
          data={userHouses}
          numColumns={2}
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
        /> */}
        <Text> Hello from users</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userHouses: state?.House?.userHouses,
});

export default connect(mapStateToProps, {})(Users);
