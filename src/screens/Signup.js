import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// let isValid = true;

const Signup = () => {
  const navigation = useNavigation();

  // States..
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // validate
  const signupp = () => {
    setButtonDisabled(true);

    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setButtonDisabled(false);
        } else if (mobile.length < 10) {
          setBadMobile(true);
        } else {
          setBadMobile(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == '') {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }

    // setTimeout(() => {
    //   if (
    //     isValid == true
    //     // badName == false &&
    //     // badEmail == false &&
    //     // badMobile == false &&
    //     // badPassword == false &&
    //     // badConfirmPassword == false
    //   ) {
    //     saveData();
    //   } else {
    //     setButtonDisabled(false);
    //   }
    // }, 2000);
  };

  // AsyncStorage SetData..
  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('MOBILE', mobile);
    await AsyncStorage.setItem('PASSWORD', password);
    console.log('yes:');
    // await AsyncStorage.setItem('CONFIRMPASSWORD', confirmPassword);
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={require('../images/playstore.png')}
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          marginTop: 60,
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
        Create New Account
      </Text>

      <CustomTextInput
        placeholder={'Enter Your Name'}
        icon={require('../images/user.png')}
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
      />
      {badName === true && (
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
          Please Enter Your Name
        </Text>
      )}

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
          Please Enter Your Email
        </Text>
      )}

      <CustomTextInput
        placeholder={'Enter Mobile Number'}
        icon={require('../images/mobile.png')}
        value={mobile}
        keyboardType={'number-pad'}
        onChangeText={txt => {
          setMobile(txt);
        }}
      />
      {badMobile === true && (
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
          Please Enter 10 Digit Mobile Number
        </Text>
      )}

      <CustomTextInput
        placeholder={'Enter Password'}
        icon={require('../images/lock.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
        type={'password'}
      />
      {badPassword === true && (
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
          Please Enter Password
        </Text>
      )}

      <CustomTextInput
        placeholder={'Confirm Password'}
        icon={require('../images/lock.png')}
        value={confirmPassword}
        onChangeText={txt => {
          setConfirmPassword(txt);
        }}
        // type={'password'}
      />
      {badConfirmPassword === true && (
        <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
          Match password.
        </Text>
      )}

      <CommonButton
        tittle={'Sign Up'}
        bgColor={buttonDisabled ? '#8e8e8e' : '#ffcc01'}
        textColor={'#000'}
        disabled={buttonDisabled}
        onPress={() => {
          signupp();
          // saveData()
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
          navigation.goBack('Login');
        }}>
        Already have a Account.
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
