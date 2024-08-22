import { View, Text, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItemData from '../common/CartItemData';
import { removeItemFromCart } from '../redux/action/Actions';
import { addToWishList } from '../redux/action/Actions';
import CommonButton from '../common/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const cartData = useSelector(state => state.Reducers);
  // setCartList(cartData)
  console.log("cartData=====", cartData)
  const dispatch = useDispatch();

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      {/*  We are the List of of ITEM of cart here ..... */}

      {cartData.length > 0 ? (

        < FlatList
          style={{ marginTop: 20 }}
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItemData
                item={item}
                onAddToWhislist={x => {
                  // console.log(x, "===x=")

                  dispatch(addToWishList(x));
                }}
                onRemoveItem={() => {
                  dispatch(removeItemFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Items Added in Cart</Text>
        </View>
      )}

      {cartData.length > 0 ? (
        <View style={{ marginBottom: 80 }}>
          <CommonButton
            bgColor={'green'}
            textColor={'#fff'}
            tittle={'Checkout'}
            //  Razor Pay integration
            // onPress={() => {
            //   var options = {
            //     description: 'Credits towards consultation',
            //     image:
            //       'data:image/png;base64,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',
            //     currency: 'INR',
            //     key: 'rzp_test_wNUJmvvxYOaufe', // Your api key
            //     amount: '50000',
            //     name: 'foo',
            //     prefill: {
            //       email: 'void@razorpay.com',
            //       contact: '7506567749',
            //       name: 'Razorpay Software',
            //     },
            //     theme: { color: '#42ded1' },
            //   };
            //   RazorpayCheckout.open(options)
            //     .then(data => {
            //       // handle success
            //       alert(`Success: ${data.razorpay_payment_id}`);
            //     })
            //     .catch(error => {
            //       // handle failure
            //       alert(`Error: ${error.code} | ${error.description}`);
            //     });
            // }}

            onPress={() => {
              navigation.navigate('Checkout');
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
