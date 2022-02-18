import { Modal, Pressable, Text, View } from "react-native";
import React, { Component } from "react";
import mainStyles from "../../styles/main";
import { TouchableOpacity } from "react-native-gesture-handler";
import cartStyles from "../../styles/cart";
import cardStyles from "../../styles/cards";

class AddHouse extends Component {
  render() {
    const { modalsVars } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalsVars.modalVisible}
        onRequestClose={() => {
          console.log("modal cloased");
        }}
      >
        <View style={cardStyles.centeredView}>
          <View style={cardStyles.modalView}>
            <Pressable
              style={[cardStyles.btn, cardStyles.modalBtn]}
              onPress={() => modalsVars.setModalVisible()}
            >
              <Text>Close modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }
}

export default AddHouse;
