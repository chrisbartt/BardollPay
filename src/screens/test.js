import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
import {Scales, Colors} from '@common';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../store/action/auth';
import LinearGradient from 'react-native-linear-gradient';

const TestScreen = props => {
  const [loading, setLoading] = useState(false);
  const userData = useSelector(state => state.Auth.userData);

  let name = 'User Name';
  if (userData != null) {
    name = userData.name;
  }

  const dispatch = useDispatch();

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

  return (
    <View style={styles.Conatainer}>
      <LinearGradient
        colors={['#A230ED', '#A230ED', '#A230ED']}
        style={styles.editBtn}>
        <Text style={styles.editText}>Update KYC</Text>
      </LinearGradient>

      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient colors={['#ca8af5', '#A230ED']} style={styles.editBtn}>
          <Text style={styles.editText}>Update KYC</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient colors={['#d5a1f7', '#A230ED']} style={styles.editBtn}>
          <Text style={styles.editText}>Update KYC</Text>
        </LinearGradient>
      </TouchableOpacity>

      <LinearGradient
        colors={['#a230ed', '#ca8af5', '#A230ED']}
        style={styles.editBtn}>
        <Text style={styles.editText}>Update KYC</Text>
      </LinearGradient>

      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient colors={['#A230ED', '#ca8af5']} style={styles.editBtn}>
          <Text style={styles.editText}>Update KYC</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient
          colors={['#ca8af5', '#A230ED', '#d5a1f7']}
          style={styles.editBtn}>
          <Text style={styles.editText}>Update KYC</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient colors={['#A230ED', '#d5a1f7']} style={styles.editBtn}>
          <Text style={styles.editText}>Update KYC</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ca8af5', '#A230ED']}
          style={styles.editBtn}>
          <Text style={styles.editText}>Update KYC</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ca8af5', '#A230ED', '#d5a1f7']}
          style={styles.editBtn}>
          <Text style={styles.editText}>Update KYC</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#ca8af5', '#A230ED', '#d5a1f7']}
          style={styles.editBtn}>
          <Text style={styles.editText}>Update KYC</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: Scales.deviceWidth * 0.2,
    height: Scales.deviceWidth * 0.2,
    borderRadius: Scales.deviceWidth * 0.1,
    overflow: 'hidden',
  },
  image: {
    width: Scales.deviceWidth * 0.2,
    height: Scales.deviceWidth * 0.2,
  },
  editBtn: {
    width: Scales.deviceWidth * 0.35,
    height: Scales.deviceHeight * 0.05,
    borderRadius: 75,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: Colors.Accent,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  editText: {
    fontSize: Scales.moderateScale(16),
    color: Colors.WHITE,
  },
});

export default TestScreen;
