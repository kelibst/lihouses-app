import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  homeCard: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    minHeight: 200,
    borderRadius: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  shadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  image: {
    width: "100%",
    minHeight: 150,
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: "black",
    fontWeight: "900",
  },
  actions: {
    margin: 10,
  },
  price: {
    fontWeight: "900",
    fontSize: 14,
  },
});

export default cardStyles;
