import { StyleSheet, View } from "react-native";


import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";

export default LocationPicker = () => {
  const getLocationHandler = () => {};
  const getOnMapHandler = () => {};
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={getOnMapHandler}>
          Pick On Map
        </OutlineButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
