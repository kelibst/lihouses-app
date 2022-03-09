import { Modal, Pressable, Text, View } from "react-native";
import React, { Component } from "react";
import mainStyles from "../../styles/main";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
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
        onRequestClose={() => {
          console.log("modal cloased");
        }}
      >
        <Pressable
          onPress={() => modalsVars.setModalVisible()}
          style={cardStyles.centerModal}
        >
          <View style={cardStyles.modalView}>
            <ScrollView>
              <Text style={mainStyles.mainHeaderTitle}>Add a new House:</Text>
              <AddHseForm />
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    );
  }
}

export default AddHouse;
