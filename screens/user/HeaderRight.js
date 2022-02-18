import { View, Text, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../constants/Color";
import mainStyles from "../../styles/main";
import utilities from "../../styles/utilities";

const HeaderRight = (props) => {
  const { modalsVars } = props;
  console.log(modalsVars);
  return (
    <View style={mainStyles.userHeader}>
      <TouchableOpacity style={utilities.padsmLft}>
        <Text style={[mainStyles.userHeaderTxt, utilities.fontSansBold]}>
          Home
        </Text>
      </TouchableOpacity>
      <View style={mainStyles.userHeaderIcoCont}>
        <TouchableOpacity
          onPress={() => {
            props.navigator.navigate("Profile");
          }}
        >
          <Text style={mainStyles.userHeaderIco}>
            <Ionicons name="person-circle" size={35} color={Color.primary} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            modalsVars.setModalVisible();
          }}
        >
          <Text style={utilities.padsmRgt}>
            <Ionicons name="add-circle" size={35} color={Color.primary} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HeaderRight;
