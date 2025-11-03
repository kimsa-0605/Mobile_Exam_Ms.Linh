import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bocuc = () => {
    const colors = ['red', 'blue', 'orange', 'purple', 'green', 'yellow', 'black', 'white','pink'];
  return (
    <View style={styles.container}>
        {colors.map((element, index) => (
            <View key={index} style={[styles.item, {backgroundColor: element}]}>
                <Text>Block {index + 1}</Text>
            </View>
        ))}
    </View>
  )
}

export default Bocuc

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
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
})