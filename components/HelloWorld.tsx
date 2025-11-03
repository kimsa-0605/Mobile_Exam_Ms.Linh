import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>Hello, Sa xinh đẹp đây !!!!</Text>
    </View>
  );
}   
export default HelloWorld;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
