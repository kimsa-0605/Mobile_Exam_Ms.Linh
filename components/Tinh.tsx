// import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
// import { RadioButton } from 'react-native-paper'
// import React from 'react'

// const Tinh = () => {
//     const [so1, setSo1] = React.useState('');
//     const [so2, setSo2] = React.useState('');
//     const [phepTinh, setPhepTinh] = React.useState('');
//     const [ketQua, setKetQua] = React.useState('');

//     const tinhToan = () => {
//         const a = parseFloat(so1);
//         const b = parseFloat(so2);

//         if (isNaN(a) || isNaN(b)) {
//             setKetQua('Vui lòng nhập số hợp lệ!');
//             return;  
//         }

//         if (isNaN(a)) {
//             setKetQua('Vui lòng nhập số a hợp lệ!');
//             return;  
//         }

//         if (isNaN(b)) {
//             setKetQua('Vui lòng nhập số b hợp lệ!');
//             return;  
//         }

//         let ketQua = '';

//         switch (phepTinh) {
//             case 'cong': ketQua = (a + b).toString(); break;
//             case 'tru': ketQua = (a - b).toString(); break;
//             case 'nhan': ketQua = (a * b).toString(); break;
//             case 'chia': 
//                 ketQua = b !== 0 ? (a / b).toString() : 'Không thể chia cho 0';
//                 break;
//             case 'sosanh': 
//                 ketQua = a > b ? 'Số a lớn hơn' : a < b ? 'Số b lớn hơn' : 'Hai số bằng nhau';
//                 break;
//             default:
//                 ketQua = 'Chưa chọn phép toán';
//         }
//     }
//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Máy tính với radio Buttons</Text>
//       <TextInput 
//         placeholder='Nhập a' 
//         keyboardType='numeric' 
//         value={so1}
//         onChangeText={setSo1}
//       />
//       <TextInput 
//         placeholder='Nhập b' 
//         keyboardType='numeric' 
//         value={so2}
//         onChangeText={setSo2}
//       />
//       <Text>Chọn phép toán:</Text>

//       <RadioButton.Group onValueChange={setPhepTinh} value={phepTinh}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <RadioButton value="cong" /><Text>Cộng</Text>
//           <RadioButton value="tru" /><Text>Trừ</Text>
//           <RadioButton value="nhan" /><Text>Nhân</Text>
//           <RadioButton value="chia" /><Text>Chia</Text>
//           <RadioButton value="sosanh" /><Text>So sánh</Text>
//         </View>
//       </RadioButton.Group>

//       <Button title='Tính' onPress={tinhToan} />
//       <Text>Kết quả: {ketQua}</Text> 
//     </View>
//   )
// }

// export default Tinh

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tinh = () => {
  const colors = ['red', 'blue', 'orange', 'purple', 'green', 'yellow', 'black', 'white','pink'];
  return (
    <View style={styles.container}>
      {colors.map ((element, index) => (
        <View key={index} style={[styles.item, {backgroundColor: element}]}>
          <Text>Block {index + 1}</Text>
        </View>
      ))}
    </View>
  )
}

export default Tinh

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '30%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  }
})