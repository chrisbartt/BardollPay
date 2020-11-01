import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Scales, Colors} from '@common';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileListItem = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onItemPress}>
        <View style={styles.itemContainer}>
          <Icon
            name={props.iconName}
            color={Colors.GRAY}
            size={Scales.moderateScale(30)}
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
  },
  itemContainer: {
    height: Scales.deviceHeight * 0.1,
    width: Scales.deviceWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemIcon: {
    marginHorizontal: 20,
  },

  itemText: {
    fontSize: Scales.moderateScale(18),
    fontWeight: '600',
    color: Colors.GRAY,
  },
});

export default ProfileListItem;
