import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Scales, Colors} from '@common';
import Card from './Card';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TransactionCard = (props) => {
  const {type, name, desc, amount} = props;

  let oparator = '+';
  if (type === 'sent') {
    oparator = '-';
  }

  return (
    <Card
      style={{
        alignItems: 'center',
        width: Scales.deviceWidth * 0.93,
        height: 70,
        marginTop: 10,
        alignSelf: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          flexDirection: 'row',
          flex: 1,
          padding: 5,
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 0.5,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={type === 'sent' ? 'angle-double-up' : 'angle-double-down'}
            size={35}
            color={type === 'sent' ? 'red' : 'green'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            height: 60,
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 60,
              justifyContent: 'space-around',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
              }}>
              {desc}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: type === 'sent' ? 'red' : 'green'}}>
              ₹ {oparator}
            </Text>
            <Text>{amount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default TransactionCard;
