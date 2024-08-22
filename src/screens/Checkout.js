import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonButton from '../common/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native';
import { addOrder } from '../redux/action/Actions';

const Checkout = () => {
    const cartData = useSelector(state => state.Reducers);

    //
    const [selectedAddress, setSelectedAddress] = useState('');

    const navigation = useNavigation()
    const dispatch = useDispatch()

    // For Total Amount ....
    const getTotal = () => {

        let tempTotal = 0;
        cartData.map(item => {
            tempTotal = tempTotal + item.price;
        });
        return tempTotal;
    };

    const addressList = useSelector(state => state.AddressReducers);
    console.log(addressList);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View>
                    <FlatList
                        data={cartData}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        height: 70,
                                        flexDirection: 'row',
                                        marginTop: 10,
                                    }}>
                                    <Image
                                        source={item.image}
                                        style={{ width: 70, height: 70, marginLeft: 10 }}
                                    />
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                        <Text style={{ marginTop: 10 }}>{'₹ ' + item.price}</Text>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginTop: 10,
                        borderTopWidth: 0.5,
                        borderColor: '#8e8e8e',
                        height: 50,
                        // backgroundColor: 'blue'
                    }}>
                    <Text>Total : </Text>
                    <Text>{'₹ ' + getTotal()}</Text>
                </View>

                <View>
                    <FlatList
                        data={addressList}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        // height: 60,
                                        borderWidth: 0.6,
                                        borderColor: '#8e8e8e',
                                        flexDirection: 'row',
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        // justifyContent: 'space-evenly',
                                        justifyContent: 'space-between',
                                        marginTop: 10,
                                    }}>
                                    <View>
                                        <Text style={{ marginLeft: 20 }}>{'City: ' + item.city}</Text>
                                        <Text style={{ marginLeft: 20 }}>
                                            {'Building: ' + item.building}
                                        </Text>
                                        <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                                            {'Pincode: ' + item.pincode}
                                        </Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            borderWidth: 0.2,
                                            borderRadius: 5,
                                            padding: 7,
                                            marginRight: 20,
                                        }}
                                        onPress={() => {
                                            setSelectedAddress(
                                                'City: ' +
                                                item.city +
                                                '' +
                                                ',Building: ' +
                                                item.building +
                                                '' +
                                                ',PinCode: ' +
                                                item.pincode,
                                            );
                                        }}>
                                        <Text>Select Address</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </View>

                <Text style={{ margin: 20, fontSize: 18 }}>Select Address</Text>
                <Text style={{ marginLeft: 20, fontSize: 14 }}>
                    {selectedAddress == ''
                        ? 'Please Select Address from  Above  List '
                        : selectedAddress}
                </Text>

                <CommonButton
                    bgColor={'#000'}
                    textColor={'#fff'}
                    tittle={'Place Order'}
                    onPress={() => {
                        var options = {
                            description: 'Credits towards consultation',
                            image:
                                'data:image/png;base64,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',
                            currency: 'INR',
                            key: 'rzp_test_wNUJmvvxYOaufe', // Your api key
                            amount: '' + parseInt(getTotal() * 100) + '',
                            name: 'foo',
                            prefill: {
                                email: 'void@razorpay.com',
                                contact: '7506567749',
                                name: 'Razorpay Software',
                            },
                            theme: { color: '#42ded1' },
                        };
                        RazorpayCheckout.open(options)
                            .then(data => {
                                // handle success
                                alert(`Success: ${data.razorpay_payment_id}`);
                                dispatch(addOrder({
                                    items: cartData,
                                    total: getTotal(),
                                    address: selectedAddress,

                                }))
                                navigation.navigate('OrderSuccess', {
                                    status: 'success'
                                })
                            })
                            .catch(error => {
                                // handle failure
                                alert(`Error: ${error.code} | ${error.description}`);
                                navigation.navigate('OrderSuccess', {
                                    status: 'failed'
                                })

                            });
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Checkout;

const styles = StyleSheet.create({});
