import { StyleSheet, Alert, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";

export default LocationPicker = () => {
  // Taking Permssion on both device for location.
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const verifyPermission = async () => {
    // we don't know yet we have permission or not
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      // so we would request  permission to user to get permission or not.
      const permissionResponse = await requestPermission();

      //It Return true if the permission is granted and return false if not granted
      return permissionResponse.granted;
    }
    // In this case we don't have permission to access device camera.
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You have to grant this app to use Mobile Location"
      );
      return false;
    }
    // so the 3rd case is we know that we have permission to the mobile camera.
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    // If we dont't have permission we just return not contineu to function excution
    if (!hasPermission) {
      return;
    }
    // get the current location of the use.
    const location = await getCurrentPositionAsync();
    console.log(location);
  };

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
