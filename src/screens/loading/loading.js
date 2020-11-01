import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  ActivityIndicator,ß
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';

import {Colors, Scales} from '@common';
import styles from './loading.styles';

const LoadingScreen = props => {
  useEffect(() => {
        setTimeout(() => {
          props.navigation.navigate('Intro');
        }, 1000);

        return;
  });

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={Colors.WHITE}
        barStyle={'dark-content'}
        animated={true}
      />
      <ImageBackground
        source={require('../../assets/img/splash.jpg')}
        style={styles.Imagecontainer}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.Accent} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;
