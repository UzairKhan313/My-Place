import { useState } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput } from "react-native";
import { Colors } from "../../constants/colors";

export default PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  form: { flex: 1, padding: 24 },
  label: { fontWeight: "bold", marginBottom: 4, color: Colors.primary500 },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius:8
  },
});
