import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Scales, Colors} from '@common';
import Card from './Card';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BlockedContactCard = (props) => {
  const {name, number, rightIconName, rightIconColor} = props;

  const getName = function (string) {
    var names = string.split(' '),
      name = names[0];

    if (names.length > 1) {
      name = names[0] + ' ' + names[names.length - 1];
    }
    return name;
  };

  const nameFiltred = getName(name);

  const getInitials = function initials(name) {
    var nameArray = name.split(' ');
    const initials = '';
    if (nameArray.length === 1) {
      return nameArray[0].charAt(0) + '' + nameArray[0].charAt(1);
    } else {
      initials = nameArray[0].charAt(0);
    }
    for (i = nameArray.length - 1; i < nameArray.length; i++) {
      initials += nameArray[i].charAt(0);
    }
    return initials;
  };

  const Initials = getInitials(name);

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
            borderRadius: Scales.deviceWidth * 0.1,
            backgroundColor: '#A496BF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: Scales.moderateScale(30),
              fontWeight: 'bold',
              color: Colors.WHITE,
            }}>
            {Initials.toUpperCase()}
          </Text>
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
              {nameFiltred}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
              }}>
              {number}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name={rightIconName} size={25} color={rightIconColor} />
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default BlockedContactCard;
