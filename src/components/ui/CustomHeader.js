import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Scales, Colors} from '@common';

const CustomHeader = (props) => {
  let Touch = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touch = TouchableNativeFeedback;
  }

  return (
    <View style={styles.HeaderBody}>
      <View style={styles.HeaderSection}>
        <Touch useForeground onPress={props.onLeftIconPress}>
          <View style={styles.userButton}>
            <Icon
              name={props.iconLeft}
              color={Colors.WHITE}
              size={Scales.moderateScale(30)}
              //style={styles.icon}
            />
          </View>
        </Touch>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput style={styles.searchInputText} />
          </View>
          <Touch useForeground onPress={props.onQRPress}>
            <View style={styles.QRButton}>
              <Icon
                name={'qr-code-outline'}
                color={Colors.Accent}
                size={Scales.moderateScale(22)}
              />
            </View>
          </Touch>
        </View>
      </View>
      <View style={styles.HeaderSection}>
        <Touch useForeground onPress={props.onBellPress}>
          <View style={styles.HeaderButton}>
            <Icon
              name={'notifications'}
              color={Colors.WHITE}
              size={Scales.moderateScale(25)}
            />
          </View>
        </Touch>
        <Touch useForeground onPress={props.onRefreshPress}>
          <View style={styles.HeaderButton}>
            <Icon
              name={'reload'}
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
    paddingTop: Scales.deviceHeight * 0.04,
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
    borderRadius: 75,
  },
  userButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    overflow: 'hidden',
    marginLeft: 10,
    height: Scales.moderateScale(40),
    width: Scales.moderateScale(40),
  },

  searchContainer: {
    width: Scales.deviceWidth * 0.65,
    height: 35,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.WHITE,
    borderWidth: 0.5,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },

  searchInputContainer: {
    width: Scales.deviceWidth * 0.55,
    height: '100%',
    justifyContent: 'center',
  },

  searchInputText: {
    fontSize: Scales.moderateScale(16),
    color: Colors.BLACK,
    paddingLeft: 10,
    width: '100%',
    height: '100%',
    marginBottom: -2,
  },

  HeaderButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    overflow: 'hidden',
    padding: 5,
    marginRight: 10,
    //margin: 10,
    //height: 25,
    //width: 25,
  },
  QRButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    overflow: 'hidden',
    padding: 5,
    // marginRight: 10,
    //margin: 10,
    //height: 25,
    //width: 25,
  },

  cityText: {
    fontSize: Scales.moderateScale(18),
    color: Colors.BLACK,
    paddingLeft: 5,
    //textShadowColor: 'black',
    //textShadowRadius: 10,
  },
  icon: {
    textShadowColor: 'black',
    textShadowRadius: 10,
    //padding: 10,
  },
});

export default CustomHeader;
