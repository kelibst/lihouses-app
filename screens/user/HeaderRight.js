import { View, Text, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../constants/Color";
import mainStyles from "../../styles/main";
import utilities from "../../styles/utilities";

const HeaderRight = () => (
  <View style={mainStyles.userHeader}>
    <TouchableOpacity style={utilities.padsmLft}>
      <Text style={[mainStyles.userHeaderTxt, utilities.fontSansBold]}>
        Home
      </Text>
    </TouchableOpacity>
    <View style={mainStyles.userHeaderIcoCont}>
      <TouchableOpacity>
        <Text style={mainStyles.userHeaderIco}>
          <Ionicons name="person-circle" size={35} color={Color.primary} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={utilities.padsmRgt}>
          <Ionicons name="add-circle" size={35} color={Color.primary} />
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default HeaderRight;
