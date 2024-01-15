import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.main}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});
