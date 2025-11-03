import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const PressState = () => {
    const [user, setUser] = React.useState({
        name: '',
        age: 0,
     });
    const handlePress = (event: any) => {
        Alert.alert(`Hello ${user.name}, you are ${user.age} years old!`)
    }
    return (
       <View style={styles.button}>
            <Text style={{ marginTop: 30, color: 'white' }}>
                Input your information:
            </Text>
            <TextInput
               style={styles.input}
               placeholder="Name"
               placeholderTextColor="#ccc"
               onChangeText={(text) => setUser({ ...user, name: text })}
               value={user.name}
            />
            <TextInput
               style={styles.input}
               placeholder="Age"
               placeholderTextColor="#ccc"
               keyboardType="numeric"
               onChangeText={(text) => setUser({ ...user, age: Number(text) })}
               value={user.age ? String(user.age) : ""}
            />
         <Button onPress={handlePress} title="Show Alert" />
       </View>
    )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default PressState
