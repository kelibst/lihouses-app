import { Modal, Pressable, Text, View } from "react-native";
import React, { Component } from "react";
import mainStyles from "../../styles/main";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import cartStyles from "../../styles/cart";
import cardStyles from "../../styles/cards";
import AddHseForm from "../../components/AddHseForm";
import { addHouse } from "../../store/actions/houses";
import { connect } from "react-redux";

class AddHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: "",
        description: "",
        product_img: "",
        price: "",
      },
    };
  }
  render() {
    const { modalsVars, addHse } = this.props;
    const addProToHouse = (formData) => {
      addHse(formData);
    };
    const setFormData = (fData) => {
      this.setState({ formData: fData });
    };
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalsVars.modalVisible}
      >
        <Pressable
          onPress={() => modalsVars.setModalVisible()}
          style={cardStyles.centerModal}
        >
          <View style={cardStyles.modalView}>
            <ScrollView>
              <Text style={mainStyles.mainHeaderTitle}>Add a new House:</Text>
              <AddHseForm
                frmData={{
                  formData: this.state.formData,
                  setFormData: setFormData,
                  addProToHouse: addProToHouse,
                }}
              />
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => ({
  availableHouses: state?.Houses?.availableHouses,
  userHouses: state?.Houses?.userHouses,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addHse: (product) => dispatch(addHouse(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHouse);
