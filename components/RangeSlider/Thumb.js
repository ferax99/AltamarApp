import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../assets/colors/colors";
import UserData from "../../userData";

const THUMB_RADIUS = 15;

const Thumb = () => <View style={UserData.rol._W == "comprador" ? styles.rootComprador : styles.rootVendedor} />;

const styles = StyleSheet.create({
  rootComprador: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 8,
    borderColor: colors.orangeUI,
    backgroundColor: colors.whiteButtons,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.16,
    shadowRadius: 6
  },
  rootVendedor: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 8,
    borderColor: colors.blueUI,
    backgroundColor: colors.whiteButtons,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.16,
    shadowRadius: 6
  }
});

export default memo(Thumb);
