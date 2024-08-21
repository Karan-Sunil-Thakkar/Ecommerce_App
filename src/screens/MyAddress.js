import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/action/Actions';

let addressList = [];
const MyAddress = () => {
    const navigation = useNavigation();

    const isFocused = useIsFocused();

    // useEffect(() => {

    // }, [isFocused])

    const addressList = useSelector(state => state.AddressReducers);
    console.log(addressList);

    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: 70,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 15 }}>
                    My Address
                </Text>
                <TouchableOpacity
                    style={{
                        borderWidth: 0.2,
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 7,
                        borderRadius: 10,
                    }}
                    onPress={() => {
                        navigation.navigate('AddAddress');
                    }}>
                    <Text>Add Address</Text>
                </TouchableOpacity>
            </View>

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
                                marginTop: 10
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
                                    dispatch(deleteAddress(index))
                                }}>
                                <Text>Delete Address</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default MyAddress;
