import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Scales} from '@common';
import drawerContentComponents from '../components/drawerComponent';

import LoadingScreen from '../screens/loading/loading';
import IntroScreen from '../screens/intro/intro';
import SignInScreen from '../screens/signIn/signIn';
import SignUpScreen from '../screens/signUp/signUp';
import ForgotPassScreen from '../screens/forgotPass/forgotPass';
import HomeScreen from '../screens/home/home';
import ProfileScreen from '../screens/profile/profile';
import AuthCheckScreen from '../screens/authCheck/authCheck';
import MyOrderScreen from '../screens/myOrder/myOrder';
import BillNotificationScreen from '../screens/billNotification/billNotification';
import TransactionHistoryScreen from '../screens/transactionHistory/transactionHistory';
import ChangePasswordScreen from '../screens/changePassword/changePassword';
import LanguageScreen from '../screens/language/language';
import KycScreen from '../screens/profile/kyc';
import RechargeScreen from '../screens/rechargeBill/rechargeBill';
import SendToContact from '../screens/upiSendContact/upiSendContact';

const LoadingNavigator = createStackNavigator({
  Loading: {screen: LoadingScreen, navigationOptions: {headerShown: false}},
});

const AuthCheckNavigator = createStackNavigator({
  AuthCheck: {
    screen: AuthCheckScreen,
    navigationOptions: {headerShown: false},
  },
});

const IntroNavigator = createStackNavigator({
  Intro: {screen: IntroScreen, navigationOptions: {headerShown: false}},
});

const AuthNavigator = createStackNavigator({
  SignIn: {screen: SignInScreen, navigationOptions: {headerShown: false}},
  SignUp: {screen: SignUpScreen, navigationOptions: {headerShown: false}},
  Forgot: {screen: ForgotPassScreen, navigationOptions: {headerShown: false}},
});

const ProfileNavigator = createStackNavigator({
  Profile: {screen: ProfileScreen, navigationOptions: {headerShown: false}},
  Kyc: {screen: KycScreen, navigationOptions: {headerShown: false}},
});

const HomeNavigator = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {headerShown: false}},
  Recharge: {screen: RechargeScreen, navigationOptions: {headerShown: false}},
  SendToContact: {
    screen: SendToContact,
    navigationOptions: {headerShown: false},
  },
});

const BillNotificationNavigator = createStackNavigator({
  BillNotification: {
    screen: BillNotificationScreen,
    navigationOptions: {headerShown: false},
  },
});
const TransactionHistoryNavigator = createStackNavigator({
  TransactionHistoryScreen: {
    screen: TransactionHistoryScreen,
    navigationOptions: {headerShown: false},
  },
});

const ChangePasswordNavigator = createStackNavigator({
  ChangePassword: {
    screen: ChangePasswordScreen,
    navigationOptions: {headerShown: false},
  },
});

const MyOrderNavigator = createStackNavigator({
  ChangePassword: {
    screen: MyOrderScreen,
    navigationOptions: {headerShown: false},
  },
});

const LanguageNavigator = createStackNavigator({
  Language: {screen: LanguageScreen, navigationOptions: {headerShown: false}},
});


const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Acceuil',
        drawerIcon: ({tintColor}) => (
          <Icon
            name={'ios-home'}
            size={Scales.moderateScale(27)}
            color={tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        title: 'Profile',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'heart'}
            size={Scales.moderateScale(27)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },

    MyOrder: {
      screen: MyOrderNavigator,
      navigationOptions: {
        title: 'Historique',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'md-cart'}
            size={Scales.moderateScale(27)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    BillNotification: {
      screen: BillNotificationNavigator,
      navigationOptions: {
        title: 'Bill Notifications',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'ios-card'}
            size={Scales.moderateScale(27)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
    TransactionHistory: {
      screen: TransactionHistoryNavigator,
      navigationOptions: {
        title: 'Historique des transactions',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'md-swap'}
            size={Scales.moderateScale(27)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },

    ChangePassword: {
      screen: ChangePasswordNavigator,
      navigationOptions: {
        title: 'Modifier mot de passe',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'md-lock'}
            size={Scales.moderateScale(27)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },

    Language: {
      screen: LanguageNavigator,
      navigationOptions: {
        title: 'Choisir la langue',
        drawerIcon: (drawerConfig) => (
          <Icon
            name={'md-globe'}
            size={Scales.moderateScale(27)}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
  },

  {
    contentComponent: drawerContentComponents,
    backBehavior: 'initialRoute',
    drawerType: 'front',
    drawerWidth: Scales.deviceWidth * 0.6,
    drawerBackgroundColor: Colors.WHITE,
    contentOptions: {
      activeTintColor: Colors.Accent,
      inactiveTintColor: Colors.TRANSPARENT_BLACK8,
      labelStyle: {
        fontSize: Scales.moderateScale(18),
      },
      iconContainerStyle: {
        hight: Scales.moderateScale(30),
        width: Scales.moderateScale(30),
        marginRight: 0,
      },
      itemsContainerStyle: {
        marginTop:
          Platform.OS === 'android'
            ? Scales.deviceHeight * 0.06
            : Scales.deviceHeight * 0.01,
      },
      itemStyle: {
        borderBottomWidth: 2,
        borderColor: Colors.TRANSPARENT_BLACK1,
      },

      activeBackgroundColor: Colors.TRANSPARENT_BLACK1,
      //inactiveBackgroundColor: '#red',
    },
  },
);

const RootNavigator = createSwitchNavigator(
  {
    Loading: LoadingNavigator,
    AuthCheck: AuthCheckNavigator,
    Intro: IntroNavigator,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default createAppContainer(RootNavigator);
