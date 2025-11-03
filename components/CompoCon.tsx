import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface CompoConProps {
  form: {
    name: string;
    age: number;
  };
  handleChange: (field: "name" | "age", value: string) => void;
}

const CompoCon: React.FC<CompoConProps> = ({ form, handleChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Component Con</Text>

      <TextInput
        style={styles.input}
        value={form.name}
        placeholder="Nhập tên (con)"
        onChangeText={(text) => handleChange("name", text)}
      />

      <TextInput
        style={styles.input}
        value={String(form.age)}
        placeholder="Nhập tuổi (con)"
        keyboardType="numeric"
        onChangeText={(text) => handleChange("age", text)}
      />

      <Text style={styles.text}>Tên: {form.name}</Text>
      <Text style={styles.text}>Tuổi: {form.age}</Text>

    </View>
  );
};

export default CompoCon;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
