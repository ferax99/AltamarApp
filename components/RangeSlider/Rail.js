import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../assets/colors/colors";

const Rail = () => <View style={styles.root} />;

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.greyText,
  }
});
