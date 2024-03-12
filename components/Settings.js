import React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { useDistanceContext } from "./Contexts";
import Style from "../styles/Style";

const Settings = () => {
  const { distanceUnit, setDistanceUnit } = useDistanceContext();

  return (
    <View style={Style.container}>
      <RadioButton.Group

        onValueChange={(newValue) => setDistanceUnit(newValue)}
        value={distanceUnit}
      >
        <View style={Style.radioButtonRow}>
          <Text style={Style.chooseUnit}>Choose unit</Text>
          <View style={Style.radioButtons}>
            <Text>km</Text>
            <RadioButton value="km" />
          </View>
        </View>
        <View style={Style.radioButtonRow}>
          <View style={Style.radioButtons}>
            <Text>miles</Text>
            <RadioButton value="miles" />
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default Settings;