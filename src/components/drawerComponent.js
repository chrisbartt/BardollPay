import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Scales} from '@common';
const drawerContentComponents = (props) => {
  const userData = useSelector((state) => state.Auth.userData);
  const kycData = useSelector((state) => state.Auth.kycData);

  const items = [
    {
      navOptionThumb: 'home-outline',
      navOptionName: 'Acceuil',
      screenToNavigate: 'Home',
    },

    {
      navOptionThumb: 'cart-outline',
      navOptionName: 'Historique de paiements',
      screenToNavigate: 'MyOrder',
    },
    {
      navOptionThumb: 'card-outline',
      navOptionName: 'Notifications',
      screenToNavigate: 'BillNotification',
    },
    {
      navOptionThumb: 'swap-vertical-outline',
      navOptionName: 'Historique des transactions',
      screenToNavigate: 'TransactionHistory',
    },

    {
      navOptionThumb: 'key-outline',
      navOptionName: 'Modifier le mot de passe',
      screenToNavigate: 'ChangePassword',
    },
    {
      navOptionThumb: 'language-outline',
      navOptionName: 'Choose Language',
      screenToNavigate: 'Language',
    },

  ];

  return (
    <SafeAreaView style={styles.sideMenuContainer}>
      <View style={styles.kycContainer}>
        <View style={styles.kycInfoContainer}>
          <Image
            source={require('../assets/img/avathar.png')}
            style={styles.avtarImage}
          />
          <View style={styles.kycTextContainer}>
            <Text style={styles.phoneText}>
              {userData ? userData.contact : 'Phone Number'}
            </Text>
            <Text style={styles.nameText}>
              {userData ? userData.name : 'User Name'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.toggleDrawer();
                props.navigation.navigate('Profile');
              }}>
              <Text style={styles.btnText}>Modifiez vos informations</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.kycImageContainer}>
          {kycData && kycData.approve === 1 ? (
            <Image
              source={require('../assets/img/verified.png')}
              resizeMode={'contain'}
              style={styles.kycCheckImage}
            />
          ) : (
            <Image
              source={require('../assets/img/notverified.png')}
              resizeMode={'contain'}
              style={styles.kycCheckImage}
            />
          )}
        </View>
      </View>
      {/*Divider between Top Image and Sidebar Option*/}
      <View style={styles.devider} />
      <View style={{width: '100%'}}>
        {items.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                global.currentScreenIndex = index;
                props.navigation.toggleDrawer();
                props.navigation.navigate(item.screenToNavigate);
              }}
              style={{
                ...styles.item,
                // backgroundColor:
                //   global.currentScreenIndex === key
                //     ? Colors.TRANSPARENT_BLACK1
                //     : Colors.WHITE,
              }}>
              <View style={{...styles.iconContainer}}>
                <Icon
                  name={item.navOptionThumb}
                  size={20}
                  color={Colors.TRANSPARENT_BLACK5}
                />
              </View>
              <Text style={styles.itemText}>{item.navOptionName}</Text>
            </TouchableOpacity>
            <View style={styles.devider} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 25,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: Scales.moderateScale(32),
  },
  itemContainer: {
    borderBottomWidth: 2,
    borderColor: Colors.TRANSPARENT_BLACK1,
  },
  kycContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  kycInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kycTextContainer: {
    paddingTop: 20,
    justifyContent: 'center',
  },
  kycImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  kycCheckImage: {
    width: Scales.deviceWidth * 0.05,
    height: Scales.deviceWidth * 0.05,
    margin: 10,
  },
  phoneText: {
    fontSize: Scales.moderateScale(16),
    fontWeight: '700',
  },
  nameText: {
    fontSize: Scales.moderateScale(12),
  },

  btnText: {
    fontSize: Scales.moderateScale(12),
    fontWeight: '700',
    color: Colors.Accent,
  },
  avtarImage: {
    resizeMode: 'center',
    width: Scales.moderateScale(70),
    height: Scales.moderateScale(70),
    marginTop: 20,
  },
  devider: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.TRANSPARENT_BLACK1,
    //marginTop: 15,
  },
  iconContainer: {
    marginRight: Scales.moderateScale(15),
    marginLeft: Scales.moderateScale(20),
    width: Scales.moderateScale(20),
  },
  itemText: {
    fontSize: Scales.moderateScale(12),
    color: Colors.TRANSPARENT_BLACK8,
    paddingLeft: 5,
  },
});

export default drawerContentComponents;
