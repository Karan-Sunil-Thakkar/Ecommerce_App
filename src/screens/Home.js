import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Loader from '../common/Loader';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import { useSelector } from 'react-redux';

// This entire Code is for Custome Bottom Tab navigation Without using any dependencies.......
const Home = () => {
  // For Bottom tab Selector..
  const [selectedTab, setSelectedTab] = useState(0);


  const data = useSelector(state => state)
  console.log(data, "===DATA===")

  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        // this styling for bottom tab background..
        style={{
          width: '100%',
          height: 70,
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',

          // justifyContent: 'space-between',
          // padding: 10,
          // elevation: 10,
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 0 ? 'green' : '8e8e8e',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 1 ? 'green' : '8e8e8e',
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              backgroundColor: selectedTab == 2 ? 'green' : '#000',
              borderRadius: 22,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={require('../images/bag.png')}
              style={{ width: 28, height: 28, tintColor: '#fff' }}
            />

            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'red',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 5,
                right: 5,
              }}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>{data.Reducers.length}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 3 ? 'green' : '8e8e8e',
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 15,
              right: 15,
            }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>{data.Reducers2.length}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../images/user.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 4 ? 'green' : '8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
