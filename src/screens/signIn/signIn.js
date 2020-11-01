import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import SmoothPinCodeInput from '../../components/otpInput/otpInput';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../../store/action/auth';
import Card from '../../components/ui/Card';

import {Colors, Scales} from '@common';
import styles from './signIn.styles';

const SignInScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = async () => {
    if (phone.length < 10) {
      // ToastAndroid.show(
      //   'Enter Valid 10 Digit Phone Number',
      //   ToastAndroid.SHORT,
      // );
      props.navigation.navigate('App');
      // Alert.alert('Error', 'Enter Valid 10 Digit Phone Number', [
      //   {text: 'Okay', style: 'default'},
      // ]);
    } else if (password.length < 4) {
      // ToastAndroid.show('Enter Valid 4 Digit Password', ToastAndroid.SHORT);
      Alert.alert('Error', 'Enter Valid 4 Digit Password', [
        {text: 'Okay', style: 'default'},
      ]);
    } else {
      props.navigation.navigate('App');
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <View style={styles.midContainer}>
          <View style={styles.topContainer}>
            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>Se connecter</Text>
            </View>
            <View>
              <Image
                style={styles.topImage}
                resizeMode={'contain'}

              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Bienvenue!</Text>
            <Text style={styles.loginLineText}>
              Connectez vous pour continuer
            </Text>
          </View>
          <Card style={styles.card}>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: phone ? '#8b16ff' : 'gray',
              }}>
              <Icon name={'call-outline'} size={24} color={'#dec866'} />
              <TextInput
                style={styles.body}
                placeholder={'Votre numéro de télephone'}
                autoCompleteType={'tel'}
                keyboardType={'phone-pad'}
                maxLength={10}
                onChangeText={(text) => setPhone(text)}
                value={phone}
              />
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
            <View style={styles.forgotContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  props.navigation.navigate('Forgot');
                }}>
                <Text style={styles.forgotText}>Mot de passe oublié?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginBtnContainer}>
              {loading ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                <TouchableOpacity
                  style={styles.loginBtn}
                  activeOpacity={0.7}
                  onPress={() => {
                    signInHandler();
                  }}>
                  <Icon
                    name={'lock-closed-outline'}
                    size={Scales.moderateScale(25)}
                    color={Colors.WHITE}
                  />
                  <Text style={styles.loginBtnText}>Connexion</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Image
            style={styles.bottomImage}
            resizeMode={'contain'}

          />

          <View>
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Vous n'avez pas de compte?</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  props.navigation.navigate('SignUp');
                }}>
                <Text style={styles.loginText}>S'inscrire</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInScreen;
