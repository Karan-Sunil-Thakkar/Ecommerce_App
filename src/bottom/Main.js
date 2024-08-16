import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import { products } from '../Products';
import MyProductItem from '../common/MyProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addToWishList } from '../redux/action/Actions';

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jacketsList, setJacketsList] = useState([]);
  const [pantsList, setPantslist] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [shortsList, setShortsList] = useState([]);

  //
  const dispatch = useDispatch();

  // for Calling API ...
  // but for now we have created demo data (Products....)
  useEffect(() => {
    console.log(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setJacketsList(products.category[1].data);
    setPantslist(products.category[2].data);
    setShoesList(products.category[3].data);
    setSlipperList(products.category[4].data);
    setShortsList(products.category[5].data);
  }, []);

  // const items = useSelector(state => state);
  // console.log(items);

  return (
    <ScrollView style={{ flex: 1, marginBottom: 80 }}>
      <View style={{ flex: 1 }}>
        <Header />
        <Image
          source={require('../images/banner.jpeg')}
          style={{
            width: '90%',
            height: 200,

            alignSelf: 'center',
            borderRadius: 20,
            marginTop: 10,
          }}
        />

        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 20,
                  }}>
                  <Text style={{ color: '#000' }}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New T Shirts
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={tshirtList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWhislist={x => {
                    dispatch(addToWishList(x));
                    console.log("===WHISLIST===")
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                    console.log(item, "===ITEM===")
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Jackets
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={jacketsList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWhislist={x => {
                    dispatch(addToWishList(x));
                    // console.log("===WHISLIST===")
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                    // console.log(item,"===ITEM===")
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Pants
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={pantsList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWhislist={x => {
                    dispatch(addToWishList(x));
                    // console.log("===WHISLIST===")
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                    // console.log(item,"===ITEM===")
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Shoes
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shoesList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWhislist={x => {
                    dispatch(addToWishList(x));
                    // console.log("===WHISLIST===")
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                    // console.log(item,"===ITEM===")
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Slippers
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slipperList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWhislist={x => {
                    dispatch(addToWishList(x));
                    // console.log("===WHISLIST===")
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                    // console.log(item,"===ITEM===")
                  }}
                />
              );
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Shorts
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shortsList}
            renderItem={({ item, index }) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWhislist={x => {
                    dispatch(addToWishList(x));
                    // console.log("===WHISLIST===")
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                    // console.log(item,"===ITEM===")
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
