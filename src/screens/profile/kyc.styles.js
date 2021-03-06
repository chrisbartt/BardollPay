import {StyleSheet} from 'react-native';
import {Scales, Colors} from '@common';

export default StyleSheet.create({
  Conatainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  dropdownContainer: {
    width: Scales.deviceWidth * 0.9,
    height: Scales.deviceHeight * 0.07,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.Accent,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: Scales.deviceHeight * 0.05,
    justifyContent: 'center',
  },
  panInput: {
    fontSize: Scales.moderateScale(14),
    paddingLeft: 10,
  },
  uploadBtn: {
    width: Scales.deviceWidth * 0.35,
    height: Scales.deviceHeight * 0.05,
    borderRadius: 75,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: Scales.deviceHeight * 0.05,
    alignItems: 'center',
    backgroundColor: Colors.Accent,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  uploadText: {
    fontSize: Scales.moderateScale(16),
    color: Colors.WHITE,
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Scales.deviceHeight * 0.05,
    borderRadius: 10,
    overflow: 'hidden',
    width: Scales.deviceWidth * 0.5,
    height: Scales.deviceWidth * 0.5,
    alignSelf: 'center',
  },
  removeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.TRANSPARENT_BLACK5,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  removeBtnText: {
    color: Colors.WHITE,
    fontSize: 20,
  },
  bottomBtnContainer: {
    flexDirection: 'row',
    width: Scales.deviceWidth,
  },
  bottomBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Accent,
    width: Scales.deviceWidth,
    height: 50,
    bottom: 0,
    //position: 'absolute',
  },
  btnText: {
    fontSize: Scales.moderateScale(17),
    color: Colors.WHITE,
    fontWeight: '700',
  },
});
