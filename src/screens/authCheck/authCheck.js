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
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SmoothPinCodeInput from '../../components/otpInput/otpInput';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../../store/action/auth';
import Card from '../../components/ui/Card';

import {Colors, Scales} from '@common';
import styles from './authCheck.styles';

const AuthCheckScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState('');
  const token = useSelector((state) => state.Auth.token);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('userId');
      if (!userData) {
        props.navigation.navigate('Auth');

        return;
      } else {
        const transformedData = JSON.parse(userData);
        const {contact, name} = transformedData;

        setPhone(contact);
        setName(name);

        return;
      }
    };

    getUserData();
  });

  const dispatch = useDispatch();

  const signInHandler = async () => {
    if (phone.length < 10) {
      Alert.alert('Error', 'Votre numéro de téléphone', [
        {text: 'Okay', style: 'default'},
      ]);
    } else if (password.length < 4) {
      Alert.alert('Error', 'Votre mot de passe', [
        {text: 'Okay', style: 'default'},
      ]);
    } else {
      setError(null);
      setLoading(true);
      try {
        await dispatch(authActions.signIn(phone, password));
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
  };

  const authenticateHandler = async () => {
    setError(null);
    setLoading(true);
    try {
      await dispatch(
        authActions.authenticate(token.token_type, token.access_token),
      );
    } catch (err) {
      setLoading(false);
      setError(err.message);
      props.navigation.navigate('App');
    }
  };

  async function signOutHandler() {
    setLoading(true);
    try {
      await dispatch(authActions.signOut());
      setLoading(false);
      props.navigation.navigate('Auth');
    } catch (e) {
      console.error(e.message);
      Alert.alert('Error', e.message, [{text: 'Close', style: 'default'}]);
    }
  }

  useEffect(() => {
    if (error === 'Success') {
      setError(null);
      authenticateHandler();
      // ToastAndroid.show('Success', ToastAndroid.SHORT);
    } else if (error === 'Network request failed') {
      Alert.alert('Pas de connexion ',' Veuillez vérifier votre connexion Internet', [
        {text: 'Okay'},
      ]);
    } else if (error === 'Authorized') {
      ToastAndroid.show('Authorized', ToastAndroid.SHORT);
    } else if (error) {
      Alert.alert('Message!', error, [{text: 'Okay'}]);
    }
    setError(null);
  }, [error]);

  let userName = 'User';
  if (name != null) {
    userName = name;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <View style={styles.container}>
        <View style={styles.midContainer}>
          <View style={styles.topContainer}>
            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>Connexion</Text>
            </View>
            <View>
              <Image
                style={styles.topImage}
                resizeMode={'contain'}

              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Bienvenue</Text>
            <Text style={styles.welcomeText}>{userName}</Text>
            {/* <Text style={styles.loginLineText}>
              Please Enter Your 4 Digit Password
            </Text> */}
          </View>
          <Card style={styles.card}>
            <Text style={styles.passLineText}>
              S'il vous plait, entrez votre mot de passe
            </Text>
            <View style={styles.phoneNumberContainer}>
              <Text style={styles.placeholderText}>Votre numéro de téléphone est</Text>
              <Text style={styles.phoneText}>{phone}</Text>
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
                  <Text style={styles.loginBtnText}>Se connecter</Text>
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
              <Text style={styles.registerText}>
                Connectez-vous à un autre compte?
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  signOutHandler();
                }}>
                <Text style={styles.forgotText}>se déconncter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AuthCheckScreen;
