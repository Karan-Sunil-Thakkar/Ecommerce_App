import { View, Text, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItemData from '../common/CartItemData';
import { removeItemFromCart } from '../redux/action/Actions';
import { addToWishList } from '../redux/action/Actions'

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const cartData = useSelector(state => state.Reducers);
  // setCartList(cartData)
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      {/*  We are the List of of ITEM of cart here ..... */}

      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItemData
              item={item}
              onAddToWhislist={(x) => {
                // console.log(x, "===x=")
                dispatch(addToWishList(x))
              }}
              onRemoveItem={() => {
                dispatch(removeItemFromCart(index));
              }}
            />

          );
        }}
      />
    </View>
  );
};

export default Cart;
