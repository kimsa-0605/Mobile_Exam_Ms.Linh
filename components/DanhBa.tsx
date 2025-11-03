import { 
    Alert, 
    FlatList, 
    StyleSheet, 
    Text,
    TextInput,
    TouchableOpacity,
    View 
} from 'react-native'
import React from 'react'

const DanhBa = () => {
    const [contact, setContact] = React.useState([
        { id: 1, name: "Đức Thẹn", phone: "0123456789" },
        { id: 2, name: "Me Trâm", phone: "0987654321" },
        { id: 3, name: "Ve Xom", phone: "0683958399" },
        { id: 4, name: "Xun Ngen", phone: "048249582" },
    ])
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [editingId, setEditingId] = React.useState<number | null>(null)
    const [searchQuery, setSearchQuery] = React.useState("")

    const isValidPhone = (phone: string) => {
        const phoneRegex = /^0\d{9}$/;
        return phoneRegex.test(phone);
    };
    
    const truncateName = (name: string) => {
        return name.length > 9 ? name.slice(0, 9) + "..." : name;
    };

    const addOrEditContact = () => {
        if (!name || !phone) {
            Alert.alert("🌷 Thông báo", "Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (!isValidPhone(phone)) {
            Alert.alert(
                "📱 Số điện thoại không hợp lệ!",
                "Số điện thoại phải bắt đầu bằng số 0 và có đúng 10 chữ số."
            );
            return;
        }

        if (editingId) {
            setContact((prev) =>
                prev.map((c) =>
                    c.id === editingId ? { ...c, name, phone } : c
                )
            );
            Alert.alert("🌻 Thành công", "Đã lưu thay đổi liên hệ!");
            setEditingId(null);
        } else {
            const newContact = {
                id: contact.length + 1,
                name,
                phone,
            };
            setContact([...contact, newContact]);
            Alert.alert("🌼 Thành công", "Đã thêm liên hệ mới!");
        }

        setName("");
        setPhone("");
    };

    const deleteContact = (id: number) => {
        Alert.alert("Xác nhận", "Bạn có chắc muốn xóa liên hệ này?", [
            { text: "Hủy", style: "cancel" },
            {
                text: "Xóa",
                style: "destructive",
                onPress: () => {
                    setContact(contact.filter((c) => c.id !== id));
                    Alert.alert("👽 Đã xóa", "Liên hệ đã được xóa khỏi danh sách.");
                },
            },
        ]);
    };

    const editContact = (contact: any) => {
        setEditingId(contact.id);
        setName(contact.name);
        setPhone(contact.phone);
    };

    const filteredContacts = contact.filter((c) => {
        const lowerQuery = searchQuery.toLowerCase();
        return (
            c.name.toLowerCase().includes(lowerQuery) ||
            c.phone.includes(searchQuery)
        );
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌷 Danh Bạ Cute 🌷</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Tên liên hệ"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Số điện thoại"
                    value={phone}
                    keyboardType="numeric"
                    onChangeText={setPhone}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.addBtn} onPress={addOrEditContact}>
                    <Text style={styles.addText}>
                        {editingId ? "🌷 Lưu thay đổi" : "+ Thêm liên hệ"}
                    </Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="🔍 Tìm liên hệ theo tên hoặc số..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={styles.searchInput}
                />
            </View>

            <Text style={styles.sectionTitle}>🌷 Danh sách liên hệ 🌷</Text>

            {filteredContacts.length === 0 ? (
                <Text style={styles.noResult}>Không tìm thấy liên hệ nào 🌼</Text>
            ) : (
                <FlatList
                    data={filteredContacts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View>
                                <Text style={styles.name}>{truncateName(item.name)}</Text>
                                <Text>📞 {truncateName(item.name)} - {item.phone}</Text>
                            </View>
                            <View style={{ flexDirection: "row", gap: 8 }}>
                                <TouchableOpacity
                                    style={styles.editBtn}
                                    onPress={() => editContact(item)}
                                >
                                    <Text style={{ color: "white" }}>Sửa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.deleteBtn}
                                    onPress={() => deleteContact(item.id)}
                                >
                                    <Text style={{ color: "white" }}>Xóa</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default DanhBa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8F0',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7C677F',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E5C1CD',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 10,
    color: '#5B4B49',
  },
  inputContainer: {
    backgroundColor: '#FFF1F5',
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: '#D8CFC4',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5C1CD',
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#FFF',
    color: '#5B4B49',
  },
  addBtn: {
    backgroundColor: '#A4C3B2',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    shadowColor: '#A4C3B2',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  addText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    color: '#7C677F',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FAF0E6',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#E4C9B7',
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#8C6A5D',
  },
  editBtn: {
    backgroundColor: '#C7B8EA',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteBtn: {
    backgroundColor: '#F4A7A0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  noResult: {
    textAlign: 'center',
    color: '#8C6A5D',
    fontStyle: 'italic',
    marginTop: 12,
  },
});
