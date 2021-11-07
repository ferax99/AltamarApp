import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../assets/colors/colors";

const RailSelected = () => <View style={styles.root} />;

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 2,
    backgroundColor: colors.blueUI,
    borderRadius: 2
  }
});
