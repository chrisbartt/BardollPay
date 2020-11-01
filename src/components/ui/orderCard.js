import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Scales, Colors} from '@common';
import Card from './Card';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OrderCard = (props) => {
  const {type, name, desc, amount} = props;

  const source = () => {
    if (type === 'mobile-pre') {
      return require('../../assets/img/prepaid.png');
    } else if (type === 'gas') {
      return require('../../assets/img/gas.png');
    } else if (type === 'bus') {
      return require('../../assets/img/bus.png');
    } else if (type === 'insurance') {
      return require('../../assets/img/insurance.png');
    } else if (type === 'electricity') {
      return require('../../assets/img/powerbill.png');
    } else if (type === 'flight') {
      return require('../../assets/img/flight.png');
    } else if (type === 'hotel') {
      return require('../../assets/img/hotel.png');
    } else {
      return require('../../assets/img/checkmark.png');
    }
  };

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
          <Image
            style={{height: 45, width: 45, resizeMode: 'contain'}}
            source={source()}
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
            <Text style={{color: 'red'}}>$ -</Text>
            <Text>{amount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default OrderCard;
