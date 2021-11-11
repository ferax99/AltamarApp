import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../assets/colors/colors";
import UserData from "../../userData";

const RailSelected = () => <View style={UserData.rol._W == "comprador" ? styles.rootComprador : styles.rootVendedor} />;

export default memo(RailSelected);

const styles = StyleSheet.create({
  rootComprador: {
    height: 2,
    backgroundColor: colors.orangeUI,
    borderRadius: 2
  },
  rootVendedor: {
    height: 2,
    backgroundColor: colors.blueUI,
    borderRadius: 2
  }
});
