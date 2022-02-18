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
    fontSize: 18,
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
  cardImg: {
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  detImgCont: {
    height: 280,
    position: "relative",
  },
  detTitle: {
    fontSize: 25,
    backgroundColor: "white",
  },
  iconCont: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#0202027a",
    right: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    marginEnd: 10,
    marginLeft: 10,
  },
  btnCart: {
    marginLeft: 0,
  },
  desCont: {
    backgroundColor: "white",
  },
  modalBtn: {
    backgroundColor: "blue",
    margin: 10,
    padding: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default cardStyles;
