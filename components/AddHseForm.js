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
import utilities from "../styles/utilities";

const AddHseForm = (props) => {
  const { frmData } = props;
  console.log(frmData);
  return (
    <ScrollView>
      <View>
        <KeyboardAvoidingView>
          <View>
            <View style={mainStyles.formControl}>
              <Text style={[mainStyles.label, utilities.fontSansBold]}>
                Title
              </Text>
              <TextInput
                style={mainStyles.textInp}
                value={frmData?.formData.title}
                placeholder="Chamber and Hall Self-Contain"
                onChangeText={(text) =>
                  frmData.setFormData({
                    ...frmData?.formData,
                    title: text,
                  })
                }
              />
            </View>

            <View style={mainStyles.formControl}>
              <Text style={[mainStyles.label, utilities.fontSansBold]}>
                Description
              </Text>
              <TextInput
                style={mainStyles.textInp}
                placeholder="Does it have porch, kitchen, any other information."
                multiline={true}
                value={frmData?.formData.description}
                onChangeText={(text) =>
                  frmData.setFormData({
                    ...frmData?.formData,
                    description: text,
                  })
                }
              />
            </View>

            <View style={mainStyles.formControl}>
              <Text style={[mainStyles.label, utilities.fontSansBold]}>
                Image Url:
              </Text>
              <TextInput
                style={mainStyles.textInp}
                placeholder="Link to pictures of the room"
                value={frmData?.formData.product_img}
                onChangeText={(text) =>
                  frmData.setFormData({
                    ...frmData?.formData,
                    product_img: text,
                  })
                }
              />
            </View>

            <View style={mainStyles.formControl}>
              <Text style={[mainStyles.label, utilities.fontSansBold]}>
                Price
              </Text>
              <TextInput
                style={mainStyles.textInp}
                keyboardType="numeric"
                value={frmData?.formData.price}
                onChangeText={(number) =>
                  frmData.setFormData({
                    ...frmData?.formData,
                    price: number,
                  })
                }
              />
            </View>
          </View>
          <View>
            <Button
              color={Color.primary}
              title="Add House"
              onPress={() => {
                frmData.addProToHouse(frmData.formData);
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default AddHseForm;
