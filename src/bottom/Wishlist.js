import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItemData from '../common/CartItemData';
import { addItemToCart, removeFromWishList } from '../redux/action/Actions';

const Wishlist = () => {
  const [cartList, setCartList] = useState([]);

  const cartData = useSelector(state => state.Reducers2);
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
              iswhisList={'swe'}
              item={item}
              onRemoveFromWhisList={() => {
                dispatch(removeFromWishList(index))
              }}
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }}

            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
