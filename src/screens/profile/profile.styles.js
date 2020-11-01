import {StyleSheet} from 'react-native';
import {Scales, Colors} from '@common';

export default StyleSheet.create({
  Conatainer: {
    flex: 1,
  },

  profileCard: {
    width: Scales.deviceWidth,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
  },

  profileSection: {
    alignSelf: 'center',
  },
  avtarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 20,
  },

  userDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneText: {
    fontSize: Scales.moderateScale(18),
    fontWeight: '600',
    color: Colors.GRAY,
  },
  nameText: {
    fontSize: Scales.moderateScale(22),
    fontWeight: '700',
    color: Colors.GRAY,
  },
  emailContainer: {
    flexDirection: 'row',
  },
  emailText: {
    fontSize: Scales.moderateScale(14),
    color: Colors.GRAY,
    paddingRight: 5,
    paddingBottom: 10,
  },

  verifiedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  editBtn: {
    width: Scales.deviceWidth * 0.35,
    height: Scales.deviceHeight * 0.05,
    borderRadius: 75,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: Colors.Accent,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  editText: {
    fontSize: Scales.moderateScale(16),
    color: Colors.WHITE,
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1,
  },

  kycContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  kycLineText: {
    fontSize: Scales.moderateScale(14),
    fontWeight: '600',
    color: Colors.GRAY,
    alignSelf: 'center',
  },

  kycinnerContainer: {
    flexDirection: 'row',
  },

  kycTextContainer: {
    justifyContent: 'center',
  },

  kycImage: {
    width: Scales.deviceWidth * 0.15,
    height: Scales.deviceWidth * 0.15,
    margin: 10,
  },

  kycImageContainer: {
    justifyContent: 'center',
  },

  kycCheckImage: {
    width: Scales.deviceWidth * 0.07,
    height: Scales.deviceWidth * 0.07,
    margin: 10,
  },
  bottomBtnContainer: {
    flexDirection: 'row',
    width: Scales.deviceWidth,
    // bottom: 0,
    // position: 'absolute',
  },
  bottomBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Accent,
    width: Scales.deviceWidth,
    height: 50,
  },
  btnText: {
    fontSize: Scales.moderateScale(17),
    color: Colors.WHITE,
    fontWeight: '700',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1,
  },
});
