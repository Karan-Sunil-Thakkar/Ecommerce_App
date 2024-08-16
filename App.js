import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appnavigator from './src/AppNavigator';
import MainContainer from './src/MainContainer';
import {Provider} from 'react-redux';
import store from './src/redux/store/Store';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
