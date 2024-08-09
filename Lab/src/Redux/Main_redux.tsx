import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './Store';
// import Demo_1 from './Demo_1';
// import { RTKQueryExample } from './RTKQueryExample';
import { Test_cart_redux } from './Test_cart_redux';

const Main_redux = () => {
  return (
    <Provider store={Store}>
      {/* <Demo_1/> */}
      {/* <RTKQueryExample/> */}
      <Test_cart_redux/>
    </Provider>
  )
}

export default Main_redux

const styles = StyleSheet.create({})