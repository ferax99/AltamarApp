import React, { useCallback, useState } from "react";
import RangeSliderRN from "rn-range-slider";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Label from "./Label";
import Notch from "./Notch";
import Rail from "./Rail";
import RailSelected from "./RailSelected";
import Thumb from "./Thumb";
import colors from "../../assets/colors/colors";
import UserData from "../../userData";

const RangeSlider = ({ from, to, navigation, route }) => {
  const { search, filtroUbicacion, filtroPrecioMax, filtroPrecioMin } = route.params
  const [low, setLow] = useState(from);
  const [high, setHigh] = useState(to);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

  const handleValueChange = useCallback(
    (newLow, newHigh) => {
      setLow(newLow);
      setHigh(newHigh);
    },
    [setLow, setHigh]
  );

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "70%",
          marginTop: -110,
          backgroundColor: colors.whiteButtons,
          height: 119,
          borderRadius: 10,
        }}
      >
        <View >
          <Text
            style={[
              { fontStyle: "italic" },
              { textAlign: "left", fontSize: 14, color: "#D2D2D2" }
            ]}
          >
            Min
          </Text>
          <Text
            style={[{ fontWeight: "bold" }, { fontSize: 36, color: "#000000" }]}
          >
            ₡{low}
          </Text>
        </View>
        <Text style={[{ fontWeight: "bold", marginTop: 15 }, { fontSize: 36, color: "#000000" }]}>
          -
        </Text>
        <View>
          <Text
            style={[
              { fontStyle: "italic" },
              { textAlign: "right", fontSize: 14, color: "#D2D2D2" }
            ]}
          >
            Max
          </Text>
          <Text
            style={[{ fontWeight: "bold" }, { fontSize: 36, color: "#000000" }]}
          >
            ₡{high}
          </Text>
        </View>
      </View>
      <Text style={[{ fontWeight: "bold", marginBottom: 15}, { fontSize: 18, color: colors.greyText }]}>
        Rango
      </Text>
      <RangeSliderRN
        // style={styles.slider}
        min={from}
        max={to}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        // renderLabel={renderLabel}
        // renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <TouchableOpacity
        style={UserData.rol._W == "comprador" ? styles.botonComprador : styles.botonVendedor}
        onPress={() => navigation.push("Filtros", { filtroPrecioMax: high, filtroPrecioMin: low, filtroUbicacion: filtroUbicacion, search: search })} >
        <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
          Listo
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  botonComprador: {
    backgroundColor: colors.orangeUI,
    height: 48,
    width: "100%",
    alignItems: 'center',
    padding: 15,
    color: "#FFFFFF",
    marginTop: "20%",
    borderRadius: 50,
  },
  botonVendedor: {
    backgroundColor: colors.blueUI,
    height: 48,
    width: "100%",
    alignItems: 'center',
    padding: 15,
    color: "#FFFFFF",
    marginTop: "20%",
    borderRadius: 50,
  },
});

export default RangeSlider;
