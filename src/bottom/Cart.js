import { View, Text, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItemData from '../common/CartItemData';
import { removeItemFromCart } from '../redux/action/Actions';
import { addToWishList } from '../redux/action/Actions';
import CommonButton from '../common/CommonButton';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const cartData = useSelector(state => state.Reducers);
  // setCartList(cartData)
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      {/*  We are the List of of ITEM of cart here ..... */}

      {cartData.length > 0 ? (
        <FlatList
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
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
