import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Scales, Colors} from '@common';

const ContactTile = props => {
  const getName = function(string) {
    var names = string.split(' '),
      name = names[0];

    if (names.length > 1) {
      name = names[0] + ' ' + names[names.length - 1];
    }
    return name;
  };

  const name = getName(props.name);

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

  const Initials = getInitials(props.name);

  return (
    <View style={styles.tile}>
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.6}
        onPress={props.onContactPress}>
        <View
          source={require('../../assets/img/avtar.png')}
          style={styles.initTile}>
          <Text style={styles.initText}>{Initials.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.nameText} numberOfLines={1}>
        {name.substring(0, 14)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: Scales.deviceWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: Scales.deviceWidth * 0.15,
    height: Scales.deviceWidth * 0.15,
    borderRadius: Scales.deviceWidth * 0.1,
    overflow: 'hidden',
  },
  initTile: {
    width: Scales.deviceWidth * 0.15,
    height: Scales.deviceWidth * 0.15,
    borderRadius: Scales.deviceWidth * 0.1,
    backgroundColor: '#A496BF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initText: {
    fontSize: Scales.moderateScale(30),
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  nameText: {
    fontSize: Scales.moderateScale(9),
    fontWeight: '700',
    color: Colors.GRAY,
  },
});

export default ContactTile;
