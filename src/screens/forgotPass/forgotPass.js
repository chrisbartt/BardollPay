import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import CountDown from '../../components/timer/timer';
import SmoothPinCodeInput from '../../components/otpInput/otpInput';
import {Colors, Scales} from '@common';
import styles from './forgotPass.styles';
import * as authActions from '../../store/action/auth';
import axios from 'axios';
import Card from '../../components/ui/Card';

const ForgotPassScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [showResend, setShowResend] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const resetPass = async () => {
    if (otp.length < 5) {
      // ToastAndroid.show('Enter Valid 5 Digit OTP', ToastAndroid.SHORT);
      Alert.alert('Error', 'Entrez les 4 chiffres de votre OTP', [
        {text: 'Okay', style: 'default'},
      ]);
    } else if (password.length < 4) {
      // ToastAndroid.show('Enter Valid 4 Digit Password', ToastAndroid.SHORT);
      Alert.alert('Error', 'Saisissez un mot de passe valide', [
        {text: 'Okay', style: 'default'},
      ]);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        props.navigation.navigate('SignIn');
      }, 1000);
    }
  };

  const sendOtpHandler = async () => {
    if (phone.length < 10) {
      // ToastAndroid.show(
      //   'Enter Valid 10 Digit Phone Number',
      //   ToastAndroid.SHORT,
      // );
      Alert.alert('Error', 'Entrez un numéro de téléphone valide', [
        {text: 'Okay', style: 'default'},
      ]);
    } else {
      setError(null);
      setLoading(true);
      setShowResend(false);
      setShowTimer(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <View style={styles.container}>
        <View style={styles.midContainer}>
          <View style={styles.topContainer}>
            <Image
              style={styles.topImage}
              resizeMode={'contain'}

            />

            <View style={styles.registerContainer}>
              <Text style={styles.loginText}></Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Bienvenue</Text>
            <Text style={styles.loginLineText}>
              Renitialiser votre mot de passe BardollPay
            </Text>
          </View>
          <Card style={styles.card}>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: phone ? '#dec866' : 'gray',
              }}>
              <Icon name={'call-outline'} size={24} color={'#dec866'} />
              <TextInput
                style={styles.body}
                placeholder={'Votre numéro de téléphone'}
                autoCompleteType={'tel'}
                keyboardType={'phone-pad'}
                maxLength={10}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                onBlur={() => {
                  sendOtpHandler();
                }}
              />
            </View>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: otp ? '#dec866' : 'gray',
              }}>
              <Icon name={'lock-closed-outline'} size={24} color={'#dec866'} />
              <View style={styles.otpInputContainer}>
                <View style={styles.InputWraper}>
                  <TextInput
                    style={styles.body}
                    placeholder={'Vos 4 chiffres OTP'}
                    autoCompleteType={'tel'}
                    keyboardType={'phone-pad'}
                    maxLength={4}
                    onChangeText={(text) => setOtp(text)}
                    value={otp}
                  />
                </View>
                <View style={styles.timerContainer}>
                  {showTimer === true ? (
                    <CountDown
                      until={30}
                      onFinish={() => {
                        setShowResend(true);
                        setShowTimer(false);
                      }}
                      onPress={() => {}}
                      size={20}
                      digitStyle={styles.timerBox}
                      digitTxtStyle={styles.timerText}
                      timeToShow={['S']}
                      timeLabels={{}}
                    />
                  ) : null}
                  {showResend === true ? (
                    <TouchableOpacity
                      style={styles.resendButton}
                      activeOpacity={0.4}
                      onPress={() => {
                        sendOtpHandler();
                      }}>
                      <Text style={styles.resendText}>Renvoyez</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
            <View style={styles.newPassTextContainer}>
              <Text style={styles.loginLineText}>Entrez votre nouveau mot de passe</Text>
            </View>
            <View style={styles.passInputWraper}>
              <View style={styles.inputIconWraper}>
                <Icon name={'key-outline'} size={24} color={'#dec866'} />
              </View>
              <View style={styles.passInputContainer}>
                {/* <Text style={styles.placeholderText}>
                  Enter 4 digit password
                </Text> */}
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  animated={false}
                  cellStyle={{
                    marginTop: 3,
                    width: 70,
                    height: 50,
                    borderBottomWidth: 1,
                    borderColor: 'gray',
                  }}
                  cellStyleFocused={{
                    borderColor: '#dec866',
                  }}
                  value={password}
                  onTextChange={(text) => {
                    setPassword(text);
                  }}
                />
              </View>
            </View>
          </Card>
          <View style={styles.loginBtnSection}>
            <View style={styles.loginBtnContainer}>
              {loading ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                <TouchableOpacity
                  style={styles.loginBtn}
                  activeOpacity={0.7}
                  onPress={() => {
                    resetPass();
                  }}>
                  <Text style={styles.loginBtnText}>Soumettre</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Retour</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Text style={styles.loginText}>Connexio</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={styles.bottomImage}
              resizeMode={'contain'}

            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassScreen;
