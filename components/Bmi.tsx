import React, { useEffect, useRef, useState } from "react";
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [focusField, setFocusField] = useState<'a' | 'b' | null>(null);
  const [color, setColor] = useState('#000');
  const [image, setImage] = useState('');
  const aRef = useRef<TextInput>(null);
  const bRef = useRef<TextInput>(null);

  useEffect(() => {
    if (focusField === 'a') aRef.current?.focus();
    else if (focusField === 'b') bRef.current?.focus();
  }, [focusField]);

  const calculateBMI = () => {
    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);

    if (weight.trim() === '' || isNaN(numWeight) || numWeight <= 0) {
      setResult('');
      setFocusField('a');
      return;
    }

    if (height.trim() === '' || isNaN(numHeight) || numHeight <= 0) {
      setResult('');
      setFocusField('b');
      return;
    }

    const bmi = numWeight / (numHeight * numHeight);

    let healthStatus = '';
    let color = '#000';
    let image = '';
    if (bmi < 18.5) {
      healthStatus = 'Underweight';
      color = '#e8f312ff';
      image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Dh_Oa-CHKKvxkSWfPH2EORmg7jboDoZfwns2lOPg4sWkJQ2h9rtXthauZ5Qrq7SOQzU&usqp=CAU';
    }
    else if (bmi < 25) {
      healthStatus = 'Normal';
      color = '#55f312ff';
      image = 'https://alltop.vn/backend/media/images/posts/1385/Bai_van_thuyet_minh_ve_con_meo_so_4-89820.jpg';
    }
    else if (bmi < 30) {
      healthStatus = 'Overweight';
      color = '#f36c12ff';
      image = 'https://media.2dep.vn/upload/thucquyen/2020/11/29/chang-trai-nga-ngua-truoc-man-lot-xac-cua-chu-meo-con-sau-9-thang-1606624236-5.jpg';
    }
    else {
      healthStatus = 'Obese';
      color = '#e91e1eff';
      image = 'https://media.2dep.vn/upload/thucquyen/2020/11/29/chang-trai-nga-ngua-truoc-man-lot-xac-cua-chu-meo-con-sau-9-thang-1606624236-5.jpg';
    }

    setResult(`Your BMI is: ${bmi.toFixed(2)} - ${healthStatus}`);
    setFocusField(null);
    setColor(color);
    setImage(image);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💗 Your BMI Calculator 💗</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          ref={aRef}
          style={styles.input}
          placeholder="Enter weight"
          placeholderTextColor="#b89bb0"
          value={weight}
          keyboardType="numeric"
          onChangeText={(text) => setWeight(text)}
        />
        {focusField === 'a' && (
          <Text style={styles.errorText}>Please enter a valid weight</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (m)</Text>
        <TextInput
          ref={bRef}
          style={styles.input}
          placeholder="Enter height"
          placeholderTextColor="#b89bb0"
          value={height}
          keyboardType="numeric"
          onChangeText={(text) => setHeight(text)}
        />
        {focusField === 'b' && (
          <Text style={styles.errorText}>Please enter a valid height</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>🌻 Calculate BMI 🌻</Text>
      </TouchableOpacity>

      {result !== '' && <Text style={[styles.resultText, { color }]}>{result}</Text>}
      {image !== '' &&
        <Image
          source={{ uri: image }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 0, 
            resizeMode: 'cover', 
            marginTop: 20,
            alignSelf: 'center',
          }}
        />
    }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#ffeef5', 
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
    color: '#e25b91', 
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#a34f77',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f6c4d8',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  errorText: {
    color: '#d6336c',
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#f8a1c4',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#f48fb1',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Bmi;