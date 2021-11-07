import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../assets/colors/colors";

const THUMB_RADIUS = 15;

const Thumb = () => <View style={styles.root} />;

const styles = StyleSheet.create({
  root: {
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
