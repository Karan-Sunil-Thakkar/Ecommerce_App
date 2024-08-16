import {View, Text} from 'react-native';
import React from 'react';
import Appnavigator from './AppNavigator';

const MainContainer = () => {
  return (
    <View style={{flex: 1}}>
      <Appnavigator />
    </View>
  );
};

export default MainContainer;
