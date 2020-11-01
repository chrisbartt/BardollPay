import {StyleSheet} from 'react-native';
import {Scales, Colors} from '@common';

export default StyleSheet.create({
  Conatainer: {
    flex: 1,
  },
  nameText: {
    fontSize: Scales.moderateScale(12),
    fontWeight: '700',
    color: Colors.GRAY,
  },
  searchContainerWraper: {
    alignItems: 'center',
    width: Scales.deviceWidth,
    paddingVertical: 20,
  },
  userButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    marginLeft: 10,
    height: Scales.moderateScale(40),
    width: Scales.moderateScale(40),
  },

  searchContainer: {
    width: Scales.deviceWidth * 0.9,
    height: 45,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.Accent,
    borderWidth: 0.5,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchInputContainer: {
    width: '90%',
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
  addButton: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    backgroundColor: Colors.Accent,
    position: 'absolute',
    bottom: 20,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    paddingLeft: 3,
  },
});
