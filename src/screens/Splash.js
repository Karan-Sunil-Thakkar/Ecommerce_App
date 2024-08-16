import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  // props of navigation..
  const navigation = useNavigation();

  // for multiple splash screen ....
  // const [spl, setSpl] = useState('');

  // timer for splash screen ..
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  //  For Multiple Splash Screen ...
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setSpl(1)
  //       setTimeout(()=>{
  //         setSpl(2)

  //         setTimeout(()=>{
  //   setSpl(3)

  // },)
  //       }, 4000)
  //       getData();
  //     }, 3000);
  //   }, []);

  // Code For (Find the user already login then It will directly go to home screen without login again & again)
  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      {/* {spl =  1 ? <> black </> : spl =2 <>logo</> :  <> car</>} */}
      <Image
        source={require('../images/playstore.png')}
        style={styles.splashimage}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffcc01',
  },
  splashimage: {
    width: 200,
    height: 200,
  },
});
