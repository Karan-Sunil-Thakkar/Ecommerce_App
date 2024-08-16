import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontWeight: '600',
          marginLeft: 20,
          fontSize: 20,
          color: '#000',
        }}>
        Header
      </Text>

      <TouchableOpacity
        style={{
          marginRight: 20,
          justifyContent: 'center',
        }}>
        <Text>Hii</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
