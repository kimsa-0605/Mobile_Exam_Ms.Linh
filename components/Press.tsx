import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = { 
    name: string
    age: number
}
const Press = ({name, age}: Props) => {
    const handlePress = (event: any) => {
        Alert.alert(`Hello ${name}, you are ${age} years old!`)
    }
  return (
    <View style={styles.container}>
        <Text style={{marginBottom: 10}}>Press Component</Text>
        <Button onPress={handlePress} title="Press" />
    </View>
  )
}

export default Press

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }
})