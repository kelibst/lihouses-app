import {
  View,
  form,
  Button,
  Text,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import mainStyles from "../styles/main";
import Color from "../constants/Color";

const AddHseForm = () => {
  return (
    <ScrollView>
      <View>
        <KeyboardAvoidingView>
          <View>
            <View style={mainStyles.formControl}>
              <Text style={mainStyles.label}>Title</Text>
              <TextInput style={mainStyles.textInp} />
            </View>

            <View style={mainStyles.formControl}>
              <Text style={mainStyles.label}>Description</Text>
              <TextInput style={mainStyles.textInp} />
            </View>

            <View style={mainStyles.formControl}>
              <Text style={mainStyles.label}>Image Url:</Text>
              <TextInput style={mainStyles.textInp} />
            </View>

            <View style={mainStyles.formControl}>
              <Text style={mainStyles.label}>Price</Text>
              <TextInput style={mainStyles.textInp} />
            </View>
          </View>
          <View>
            <Button color={Color.primary} title="Add House" />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default AddHseForm;
