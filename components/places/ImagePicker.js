import { Alert, Button, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

export default ImagePicker = () => {
  // From line 10 to 32 code is for taking mobile camera permission on IOS  This Hook is use for Taking permission for camer on IOS
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermission = async () => {
    // we don't know yet we have permission or not
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      // so we would request  permission to user to get permission or not.
      const permissionResponse = await requestPermission();

      //It Return true if the permission is granted and return false if not granted
      return permissionResponse.granted;
    }
    // In this case we don't have permission to access device camera.
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You have to grant this app to use Mobile Camera"
      );
      return false;
    }
    // so the 3rd case is we know that we have permission to the mobile camera.
    return true;
  };

  const pickImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return ;
    }
    // Lunching Camera for android.
    const image = launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  };
  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={pickImageHandler} />
    </View>
  );
};
