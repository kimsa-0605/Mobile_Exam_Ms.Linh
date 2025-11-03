import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CompoCon from "./CompoCon";

const CompoCha = () => {
  const [form, setForm] = useState({
    name: "",
    age: 0,
  });

  const handleChange = (field: "name" | "age", value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: field === "age" ? Number(value) : value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Component Cha</Text>

      <TextInput
        style={styles.input}
        value={form.name}
        placeholder="Nhập tên (cha)"
        onChangeText={(text) => handleChange("name", text)}
      />

      <TextInput
        style={styles.input}
        value={String(form.age)}
        placeholder="Nhập tuổi (cha)"
        keyboardType="numeric"
        onChangeText={(text) => handleChange("age", text)}
      />

      <Text style={styles.text}>Tên: {form.name}</Text>
      <Text style={styles.text}>Tuổi: {form.age}</Text>

      <CompoCon form={form} handleChange={handleChange} />
    </View>
  );
};

export default CompoCha;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
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
    fontSize: 18,
    marginTop: 10,
  },
});
