import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';

import InnerHeader from '../../components/ui/innerHeader';
import {Scales, Colors} from '@common';
import styles from './transactionHistory.styles';
import {transactionData} from '../../../StaticData/transData';
import TransactionCard from '../../components/ui/TransactionCard';

const TransactionHistoryScreen = (props) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <InnerHeader
        iconLeft={'menu'}
        title={'Transaction History'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={transactionData}
          renderItem={({item}) => (
            <TransactionCard
              type={item.type}
              name={item.name}
              desc={item.desc}
              amount={item.amount}
            />
          )}
          keyExtractor={(item) => item.index}
        />
      </View>
    </View>
  );
};

export default TransactionHistoryScreen;
