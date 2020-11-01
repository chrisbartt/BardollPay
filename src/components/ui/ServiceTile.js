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

const ServiceTile = (props) => {
  return (
    <View style={styles.tile}>
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.6}
        onPress={props.onItemPress}>
        <Image source={props.avtar} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.nameText}> {props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: Scales.deviceWidth * 0.192,
    height: Scales.deviceHeight * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Scales.deviceWidth * 0.0,
  },
  imageContainer: {
    width: Scales.deviceWidth * 0.15,
    height: Scales.deviceWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: Scales.deviceWidth * 0.09,
    height: Scales.deviceWidth * 0.09,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: Scales.moderateScale(9),
    fontWeight: '700',
    color: Colors.GRAY,
  },
});

export default ServiceTile;
