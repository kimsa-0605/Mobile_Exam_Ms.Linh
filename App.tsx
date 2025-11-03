import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import HelloWorld from './components/HelloWorld';
import Press from './components/Press';
import PressState from './components/PressState';

import CompoCha from './components/CompoCha';
import PhuongTrinh from './components/PhuongTrinh';
import PhepTinh from './components/PhepTinh';
import HealthPeople from './components/Bmi';
import Bocuc from './components/Bocuc';
import Product from './components/Product';
import Bmi from './components/Bmi';
import HocSinh from './components/HocSinh';
import DanhBa from './components/DanhBa';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* <HelloWorld />
      <Press name="Sa xinh đẹp" age={20} />
      <PressState/> */}
      {/* <CompoCha/> */}
      {/* <PhuongTrinh/> */}
      {/* <PhepTinh/> */}
      {/* <Bmi /> */}
      {/* <Bocuc/> */}
      {/* <Product /> */}
      {/* <HocSinh /> */}
      <DanhBa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eddce6ff',
    padding: 20,
  }
});

export default App;
