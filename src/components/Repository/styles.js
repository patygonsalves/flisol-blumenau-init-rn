import { StyleSheet, Platform } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight
} from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
    flex: 1,
    backgroundColor: '#fff'
  },

  boxTitle: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },

  list: {
    marginTop: 30
  },

  file: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20
  },

  separator: {
    height: 3,
    backgroundColor: "#EEE"
  },

  fileInfo: {
    flexDirection: "row",
    alignItems: "center"
  },

  fileTitle: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10
  },

  fileDate: {
    fontSize: 14,
    color: "#666"
  },

  fab: {
    position: "absolute",
    right: 30,
    bottom: 30 + getBottomSpace(),
    width: 60,
    height: 60,
    backgroundColor: "#7159c1",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 48,
    borderRadius: 4,
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  }
});

export default styles;
