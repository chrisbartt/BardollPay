import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import InnerHeader from '../../components/ui/innerHeader';
import {Scales, Colors} from '@common';
import styles from './upiSendContact.styles';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const SendToContact = (props) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <InnerHeader
        iconLeft={'chevron-back'}
        title={'Send To Contact'}
        onLeftIconPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={styles.Conatainer}>
        <View style={styles.searchContainerWraper}>
          <View style={styles.searchContainer}>
            <View style={styles.QRButton}>
              <Icon
                name={'search'}
                color={Colors.Accent}
                size={Scales.moderateScale(22)}
              />
            </View>
            <View style={styles.searchInputContainer}>
              <TextInput style={styles.searchInputText} />
            </View>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={BlockedContactData}
          renderItem={({item}) => (
            <BlockedContactCard
              name={item.name}
              number={item.number}
              rightIconName={'paper-plane'}
              rightIconColor={Colors.Accent}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
          <Icon name={'add'} color={Colors.WHITE} size={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendToContact;
