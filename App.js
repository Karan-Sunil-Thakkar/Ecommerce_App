import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Appnavigator from './src/AppNavigator';
import MainContainer from './src/MainContainer';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';

import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

let persister = persistStore(store);

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store} >
        <PersistGate persistor={persister}>
          <MainContainer />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
