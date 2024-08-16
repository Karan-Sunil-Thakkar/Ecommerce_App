import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomTextInput = ({placeholder, value, onChangeText, icon, type, keyboardType}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Image source={icon} style={{width: 24, height: 24}} />
      <TextInput
      value={value}
      onChangeText={(txt)=>{
        onChangeText(txt)
      }}
        placeholder={placeholder}
        secureTextEntry={type == 'password' ? true : false}
         keyboardType={keyboardType ? keyboardType : 'default'}
        style={{marginLeft: 10}}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
