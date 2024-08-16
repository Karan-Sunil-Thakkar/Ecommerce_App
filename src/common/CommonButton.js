import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CommonButton = ({onPress, tittle, bgColor, textColor, disabled}) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: '85%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textColor, fontSize: 22, fontWeight: '500'}}>
        {tittle}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
