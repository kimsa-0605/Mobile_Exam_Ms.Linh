import React, { useRef, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const PhuongTrinh = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState('')
  const inputARef = useRef<TextInput>(null)
  const inputBRef = useRef<TextInput>(null)

  const clearInput = () => {
    setA('')
    setB('')
  }

  const giaiPT = () => {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if (isNaN(numA) && isNaN(numB)) {
      setResult('Lỗi: Hệ số a và b không hợp lệ')
      clearInput()
      inputARef.current?.focus() 
      return
    }

    if (isNaN(numA)) {
      setResult('Lỗi: Hệ số a không hợp lệ')
      clearInput()
      inputARef.current?.focus() 
      return
    }

    if (isNaN(numB)) {
      setResult('Lỗi: Hệ số b không hợp lệ')
      inputBRef.current?.focus()
      return
    }

    if (numA === 0) {
      if (numB === 0) return setResult('Phương trình vô số nghiệm')
      return setResult('Phương trình vô nghiệm')
    }

    const x = -numB / numA
    setResult(`Phương trình có nghiệm x = ${x.toFixed(2)}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc nhất: ax + b = 0</Text>
      <TextInput
        ref={inputARef}
        style={styles.input}
        placeholder="Nhập a"
        value={a}
        onChangeText={setA}
        autoFocus={true}
        returnKeyType="next"
        onSubmitEditing={() => inputBRef.current?.focus()}
        keyboardType="numeric"
      />
      <TextInput
        ref={inputBRef}
        style={styles.input}
        placeholder="Nhập b"
        value={b}
        onChangeText={setB}
        returnKeyType="done"
        onSubmitEditing={giaiPT}
        keyboardType="numeric"
      />
      <Button title="Giải PT" onPress={giaiPT} color="#db1672ff" />
      <Text style={styles.result}>Kết quả: {result}</Text>
    </View>
  )
}

export default PhuongTrinh

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#db1672ff',
    marginBottom: 16,
  },
  result: {
    marginTop: 16,
    fontSize: 16,
    color: '#db1672ff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
})
