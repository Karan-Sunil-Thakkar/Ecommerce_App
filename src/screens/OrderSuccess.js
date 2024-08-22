import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

const OrderSuccess = () => {
    const orders = useSelector(state => state.OrderReducers);
    console.log(orders, '===ORDERS====');

    const route = useRoute();
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={
                    route.params.status == 'success'
                        ? require('../images/success.png')
                        : require('../images/failed.png')
                }
                style={{ width: 50, height: 50 }}
            />
            <Text style={{ marginTop: 20, fontSize: 20, color: '#000' }}>
                {route.params.status == 'success'
                    ? 'Your Order is Placed Successfully !'
                    : 'Your Order Failed'}
            </Text>

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    marginTop: 50,
                }}
                onPress={() => {
                    navigation.navigate("Home")
                }}>
                <Text>Go To Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OrderSuccess;

const styles = StyleSheet.create({});
