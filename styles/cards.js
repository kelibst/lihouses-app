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
    height: "100%",
  },
  imgContainer: {
    height: 150,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 14,
    fontFamily: "sans-serif",
    color: "grey",
    fontWeight: "bold",
  },
  actions: {
    margin: 10,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginTop: 10,
  },
});

export default cardStyles;
