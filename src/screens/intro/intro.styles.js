import {StyleSheet} from 'react-native';
import {Scales, Colors} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  slideContainer: {
    height: '100%',
    width: Scales.deviceWidth,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  bottomContainer: {
    height: '7%',
    width: Scales.deviceWidth,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  btnContainer: {
    backgroundColor: Colors.WHITE,
    width: Scales.deviceWidth * 0.9,
    // height: Scales.deviceHeight * 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnText: {
    fontSize: Scales.moderateScale(18),
    fontWeight: '700',
    color: Colors.Accent,
  },

  btn: {
    height: Scales.deviceHeight * 0.05,
    width: Scales.deviceWidth * 0.3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Accent,
    backgroundColor: Colors.WHITE,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtnText: {
    fontSize: Scales.moderateScale(18),
    color: Colors.WHITE,
  },

  startBtn: {
    height: Scales.deviceHeight * 0.05,
    width: Scales.deviceWidth * 0.45,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.Accent,
    backgroundColor: Colors.Accent,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Scales.deviceHeight * 0.04,
  },
});
