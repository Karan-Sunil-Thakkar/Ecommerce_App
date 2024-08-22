import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CartItemData = ({
    item,
    onRemoveItem,
    onRemoveFromWhisList,
    onAddToWhislist,
    onAddToCart,
    iswhisList,
}) => {
    return (
        <TouchableOpacity
            style={{
                width: '90%',
                height: 200,
                borderRadius: 10,
                elevation: 5,
                backgroundColor: '#fff',
                marginLeft: 20,
                marginBottom: 10,
            }}>
            <View style={{ width: '100%' }}>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: 'contain',
                        width: '100%',
                        height: '50%',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}
                />

                <Text
                    style={{
                        marginLeft: 10,
                        marginTop: 10,
                        fontSize: 18,
                        fontWeight: '600',
                    }}>
                    {item.name}
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 10,
                    }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>
                        {'₹' + item.price}
                    </Text>

                    {iswhisList ? (
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingBottom: 7,
                                paddingTop: 7,
                            }}
                            onPress={() => {
                                onAddToCart(item);
                            }}>
                            <Text style={{ color: '#000' }}>ADD to cart</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                borderRadius: 10,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingBottom: 7,
                                paddingTop: 7,
                            }}
                            onPress={() => {
                                onRemoveItem();
                            }}>
                            <Text>Remove Item From Cart</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {iswhisList ? (
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            elevation: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            onRemoveFromWhisList();
                        }}>
                        <Image
                            source={require('../images/heart_fill.png')}
                            style={{ width: 20, height: 20, tintColor: 'red' }}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            elevation: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            console.log(item, "==item===")
                            onAddToWhislist(item);
                        }}>
                        <Image
                            source={require('../images/heart.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default CartItemData;
