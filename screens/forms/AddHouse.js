import { Modal, Pressable, Text, View } from "react-native";
import React, { Component } from "react";
import mainStyles from "../../styles/main";
import { TouchableOpacity } from "react-native-gesture-handler";
import cartStyles from "../../styles/cart";
import cardStyles from "../../styles/cards";
import AddHseForm from "../../components/AddHseForm";

class AddHouse extends Component {
  render() {
    const { modalsVars } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalsVars.modalVisible}
        style={cardStyles.centeredView}
        onRequestClose={() => {
          console.log("modal cloased");
        }}
      >
        <Pressable onPress={() => modalsVars.setModalVisible()}>
          <View style={cardStyles.modalView}>
            <Pressable onPress={() => modalsVars.setModalVisible()}>
              <Text>Add a new House:</Text>
              <AddHseForm />
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    );
  }
}

export default AddHouse;
