import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Scales, Colors} from '@common';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './profile.styles';
import * as authActions from '../../store/action/auth';
import InnerHeader from '../../components/ui/innerHeader';
import SharpCard from '../../components/ui/SharpCard';
import ProfileListItem from '../../components/ui/ProfileListItem';

const ProfileScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state.Auth.userData);
  const kycData = useSelector((state) => state.Auth.kycData);
  // console.log(kycData);

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

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={Colors.Accent} />
      </View>
    );
  }

  return (
    <View style={styles.Conatainer}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <InnerHeader
        iconLeft={'menu'}
        title={'My Profile'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <SharpCard style={styles.profileCard}>
          <View style={styles.profileSection}>
            <View style={styles.avtarContainer}>
              <Image
                source={require('../../assets/img/avathar.png')}
                style={styles.avtarImage}
              />
            </View>
            <View style={styles.userDataContainer}>
              <Text style={styles.nameText}>
                {userData ? userData.name : 'User Name'}
              </Text>
              <Text style={styles.phoneText}>
                {userData ? userData.contact : 'Phone Number'}
              </Text>
              {userData ? (
                <View style={styles.emailContainer}>
                  <Text style={styles.emailText}>
                    {userData ? userData.email : 'User Email'}
                  </Text>
                  {userData.email_verified_at === 1 ? (
                    <Icon
                      name={'checkmark-circle-outline'}
                      color={Colors.Accent}
                      size={Scales.moderateScale(20)}
                    />
                  ) : null}
                </View>
              ) : null}

              <TouchableOpacity activeOpacity={0.7}>
                <LinearGradient
                  colors={['#f0b522', '#f0b522']}
                  style={styles.editBtn}>
                  <Text style={styles.editText}>Update Details</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </SharpCard>
        <SharpCard>
          <View>
            <Text style={styles.kycLineText}>KYC Details</Text>
          </View>
          <View style={styles.kycContainer}>
            <View style={styles.kycinnerContainer}>
              <View>
                <Image
                  source={require('../../assets/img/customer.png')}
                  style={styles.kycImage}
                />
              </View>
              <View style={styles.kycTextContainer}>
                <Text>
                  {kycData && kycData.pan_card_no ? kycData.pan_card_no : null}
                  {kycData === null ? 'Not Avilable' : null}
                </Text>
                <Text>
                  {kycData && kycData.approve === 1 ? userData.name : null}
                  {kycData && kycData.pan_card_no && kycData.approve === 0
                    ? 'Pending Verification'
                    : null}
                </Text>
              </View>
            </View>
            <View style={styles.kycImageContainer}>
              {kycData && kycData.approve === 1 ? (
                <Image
                  source={require('../../assets/img/verified.png')}
                  resizeMode={'contain'}
                  style={styles.kycCheckImage}
                />
              ) : (
                <Image
                  source={require('../../assets/img/notverified.png')}
                  resizeMode={'contain'}
                  style={styles.kycCheckImage}
                />
              )}
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate('Kyc');
            }}>
            <LinearGradient
              colors={['#f0b522', '#f0b522']}
              style={styles.editBtn}>
              <Text style={styles.editText}>Update KYC</Text>
            </LinearGradient>
          </TouchableOpacity>
        </SharpCard>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          signOutHandler();
        }}>
        <View style={styles.bottomBtn}>
          <Text style={styles.btnText}>SIGN OUT</Text>
        </View>
      </TouchableOpacity>
      <SafeAreaView backgroundColor={Colors.Accent} />
    </View>
  );
};

export default ProfileScreen;
