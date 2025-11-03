import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

export default function HocSinh() {
  const [students, setStudents] = useState([
    { id: 1, name: "An", age: 17, grade: 7.5 },
    { id: 2, name: "Bình", age: 18, grade: 8.7 },
    { id: 3, name: "Chi", age: 19, grade: 9.2 },
    { id: 4, name: "Dũng", age: 18, grade: 6.8 },
    { id: 5, name: "Hà", age: 20, grade: 8.0 },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const addOrEditStudent = () => {
    if (!name || !age || !grade) {
      Alert.alert("⚠️ Thông báo", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (editingId) {
      setStudents((prev) =>
        prev.map((s) =>
          s.id === editingId
            ? { ...s, name, age: Number(age), grade: Number(grade) }
            : s
        )
      );
      Alert.alert("✅ Thành công", "Đã lưu thay đổi học sinh!");
      setEditingId(null);
    } else {
      const newStudent = {
        id: students.length + 1,
        name,
        age: Number(age),
        grade: Number(grade),
      };
      setStudents([...students, newStudent]);
      Alert.alert("🎉 Thành công", "Đã thêm học sinh mới!");
    }

    setName("");
    setAge("");
    setGrade("");
  };

  const deleteStudent = (id: number) => {
    Alert.alert("Xác nhận", "Bạn có chắc muốn xóa học sinh này?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => {
          setStudents(students.filter((s) => s.id !== id));
          Alert.alert("🗑️ Đã xóa", "Học sinh đã được xóa khỏi danh sách.");
        },
      },
    ]);
  };

  const editStudent = (student: any) => {
    setEditingId(student.id);
    setName(student.name);
    setAge(student.age.toString());
    setGrade(student.grade.toString());
  };

  const filtered = students.filter((s) => s.grade > 8 || s.age > 18);
  const sorted = [...students].sort((a, b) => b.grade - a.grade);
  const countHigh = students.filter((s) => s.grade > 8).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Quản lý học sinh</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tên học sinh"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Tuổi"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Điểm"
          value={grade}
          onChangeText={setGrade}
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addOrEditStudent}>
          <Text style={styles.addText}>
            {editingId ? "💾 Lưu thay đổi" : "+ Thêm học sinh"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>📋 Danh sách học sinh:</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text>Tuổi: {item.age}</Text>
              <Text>Điểm: {item.grade}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => editStudent(item)}
              >
                <Text style={{ color: "white" }}>Sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteStudent(item.id)}
              >
                <Text style={{ color: "white" }}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>📊 Lọc & Thống kê:</Text>
      <Text>Học sinh có điểm {`>`} 8 hoặc tuổi {`>`} 18:</Text>
      {filtered.map((s) => (
        <Text key={s.id}>• {s.name} ({s.grade})</Text>
      ))}
      <Text style={{ marginTop: 10 }}>
        Sắp xếp theo điểm (cao → thấp): {sorted.map((s) => s.name).join(", ")}
      </Text>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>
        ✅ Số học sinh có điểm trên 8: {countHigh}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addText: {
    color: "white",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  deleteBtn: {
    backgroundColor: "#FF3B30",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  editBtn: {
    backgroundColor: "#34C759",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});
