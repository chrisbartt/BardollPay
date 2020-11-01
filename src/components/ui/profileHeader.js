import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Scales, Colors} from '@common';

const ProfileHeader = props => {
  let Touch = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touch = TouchableNativeFeedback;
  }

  return (
    <View style={styles.HeaderBody}>
      <View style={styles.HeaderSection}>
        <Touch useForeground onPress={props.onBackPress}>
          <View style={styles.backButton}>
            <Icon
              name={props.iconLeft}
              color={Colors.WHITE}
              size={Scales.moderateScale(30)}
              //style={styles.icon}
            />
          </View>
        </Touch>
        <View>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
      </View>
      <View style={styles.HeaderSection}>
        <Touch useForeground onPress={props.onLogOutPress}>
          <View style={styles.loguotContainer}>
            <Text style={styles.logoutText}>Se déconnecter</Text>
            <Icon
              name={'md-log-out'}
              color={Colors.WHITE}
              size={Scales.moderateScale(25)}
            />
          </View>
        </Touch>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderBody: {
    width: Scales.deviceWidth,
    height: Scales.deviceHeight * 0.13,
    paddingTop: Scales.deviceHeight * 0.05,
    backgroundColor: Colors.Accent,
    borderBottomWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },

  HeaderSection: {
    borderBottomWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    height: Scales.deviceHeight * 0.05,
    width: Scales.deviceHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  loguotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 5,
    marginRight: 10,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: Scales.moderateScale(24),
    color: Colors.WHITE,
    paddingLeft: 5,
    fontWeight: '600',
  },
  logoutText: {
    fontSize: Scales.moderateScale(18),
    color: Colors.WHITE,
    paddingLeft: 5,
    fontWeight: '600',
    paddingRight: 5,
  },
});

export default ProfileHeader;
