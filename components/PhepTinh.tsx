import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'
import React from 'react'

const PhepTinh = () => {
    const [so1, setSo1] = React.useState('');
    const [so2, setSo2] = React.useState('');
    const [phepTinh, setPhepTinh] = React.useState('');
    const [ketQua, setKetQua] = React.useState('');

    const tinhToan = () => {
        const a = parseFloat(so1);
        const b = parseFloat(so2);

        if (isNaN(a) || isNaN(b)) {
            setKetQua('Vui lòng nhập số hợp lệ!');
            return;  
        }

        if (isNaN(a)) {
            setKetQua('Vui lòng nhập số a hợp lệ!');
            return;  
        }

        if (isNaN(b)) {
            setKetQua('Vui lòng nhập số b hợp lệ!');
            return;  
        }

        let ketQua = '';
        switch (phepTinh) {
            case 'cong': ketQua = (a + b).toString(); break;
            case 'tru': ketQua = (a - b).toString(); break;
            case 'nhan': ketQua = (a * b).toString(); break;
            case 'chia': 
                ketQua = b !== 0 ? (a / b).toString() : 'Không thể chia cho 0';
                break;
            case 'sosanh': 
                ketQua = a > b ? 'Số a lớn hơn' : a < b ? 'Số b lớn hơn' : 'Hai số bằng nhau';
                break;
            default:
                ketQua = 'Chưa chọn phép toán';
        }

        setKetQua(isNaN(Number(ketQua)) ? ketQua : Number(ketQua).toFixed(2));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>💗 Máy tính hồng dễ thương 💗</Text>

            <TextInput 
                placeholder='Nhập a' 
                keyboardType='numeric' 
                value={so1}
                onChangeText={setSo1}
                style={styles.input}
                placeholderTextColor="#d182a8"
            />
            <TextInput 
                placeholder='Nhập b' 
                keyboardType='numeric' 
                value={so2}
                onChangeText={setSo2}
                style={styles.input}
                placeholderTextColor="#d182a8"
            />

            <Text style={styles.label}>Chọn phép toán:</Text>

            <RadioButton.Group onValueChange={setPhepTinh} value={phepTinh}>
                <View style={styles.radioGroup}>
                    <View style={styles.radioItem}><RadioButton value="cong" color="#ff80b5"/><Text style={styles.radioText}>Cộng</Text></View>
                    <View style={styles.radioItem}><RadioButton value="tru" color="#ff80b5"/><Text style={styles.radioText}>Trừ</Text></View>
                    <View style={styles.radioItem}><RadioButton value="nhan" color="#ff80b5"/><Text style={styles.radioText}>Nhân</Text></View>
                    <View style={styles.radioItem}><RadioButton value="chia" color="#ff80b5"/><Text style={styles.radioText}>Chia</Text></View>
                    <View style={styles.radioItem}><RadioButton value="sosanh" color="#ff80b5"/><Text style={styles.radioText}>So sánh</Text></View>
                </View>
            </RadioButton.Group>

            <TouchableOpacity style={styles.button} onPress={tinhToan}>
                <Text style={styles.buttonText}>Tính 💕</Text>
            </TouchableOpacity>

            <Text style={styles.result}>Kết quả: <Text style={styles.resultValue}>{ketQua}</Text></Text> 
        </View>
    )
}

export default PhepTinh

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe6f1',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff4d94',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ffb6d9',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
        color: '#d14d8b',
    },
    label: {
        fontSize: 16,
        color: '#d14d8b',
        marginTop: 10,
        marginBottom: 5,
        fontWeight: '500',
    },
    radioGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 15,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginVertical: 5,
    },
    radioText: {
        color: '#cc3f8d',
        fontSize: 15,
    },
    button: {
        backgroundColor: '#ff80b5',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 12,
        marginTop: 10,
        shadowColor: '#ffb6d9',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    result: {
        marginTop: 20,
        fontSize: 16,
        color: '#cc3f8d',
    },
    resultValue: {
        fontWeight: 'bold',
        color: '#ff4d94',
    },
});
