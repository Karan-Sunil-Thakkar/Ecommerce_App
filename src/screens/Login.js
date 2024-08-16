import {Alert, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';
import Loader from '../common/Loader';

const Login = () => {
  const navigation = useNavigation();

  // states ..
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  // state for Modal ..
  const [modalVisible, setModalVisible] = useState(false);

  // For Validation..
  // const validate = () => {
  //   if (email === '') {
  //     setBadEmail(true);
  //   } else {
  //     setBadEmail(false);
  //   }
  //   if (password === '') {
  //     setBadPassword(true);
  //   } else {
  //     setBadPassword(false);
  //   }

  //   // let validate = false;
  //   // if (email !== ' ') {
  //   //   validate = true;
  //   // } else if (password !== ' ') {
  //   //   validate = true;
  //   // }
  //   getData();
  // };

  const login = () => {
    setModalVisible(true);
    if (email == '') {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == '') {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

  //  AysncStorage getData .....
  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    console.log(mEmail, mPass);
    if (mEmail === email && mPass === password) {
      setModalVisible(false);
      navigation.navigate(Home);
    } else {
      setModalVisible(false);
      Alert.alert('Wrong Credentials');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={require('../images/playstore.png')}
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          marginTop: 80,
          borderRadius: 30,
        }}
      />
      <Text
        style={{
          marginTop: 50,
          alignSelf: 'center',
          fontSize: 28,
          fontWeight: '600',
          color: '#ffcc01',
        }}>
        Login
      </Text>

      <CustomTextInput
        placeholder={'Enter Your Email'}
        icon={require('../images/mail.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {badEmail === true && (
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
          Please Enter Email
        </Text>
      )}

      <CustomTextInput
        placeholder={'Enter Password'}
        icon={require('../images/lock.png')}
        type={'password'}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {badPassword === true && (
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
          Please Enter Password
        </Text>
      )}

      <CommonButton
        tittle={'Login'}
        bgColor={'#ffcc01'}
        textColor={'#000'}
        onPress={() => {
          login();
        }}
      />

      <Text
        style={{
          fontSize: 24,
          fontWeight: '800',
          marginTop: 20,
          alignSelf: 'center',
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create New Account?
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />

      {/* <TextInput
        placeholder="Enter Your Email"
        style={{
          width: '85%',
          height: 50,
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 0.5,
          marginTop: 50,
          paddingLeft: 20,
        }}
      />

      <TextInput
        placeholder="Enter  Password"
        style={{
          width: '85%',
          height: 50,
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 0.5,
          marginTop: 20,
          paddingLeft: 20,
        }}
      /> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
