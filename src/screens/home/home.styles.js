import {StyleSheet} from 'react-native';
import {Scales, Colors} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAF7FC',
    //justifyContent: 'center',
  },

  bannerCard: {
    width: Scales.deviceWidth * 0.98,
    height: Scales.deviceHeight * 0.15,
    marginTop: Scales.deviceHeight * 0.01,
  },

  serviceCard: {
    width: Scales.deviceWidth * 0.98,
    height: Scales.deviceHeight * 0.2,
    marginTop: Scales.deviceHeight * 0.01,
    marginBottom: Scales.deviceHeight * 0.01,

  },

  bannerImgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Scales.deviceHeight * 0.01,
  },

  upiBanner: {
    height: Scales.deviceHeight * 0.1,
    width: Scales.deviceWidth * 0.3,
    resizeMode: 'center',
  },

  aepsBanner: {
    height: Scales.deviceHeight * 0.1,
    width: Scales.deviceWidth * 0.4,
    resizeMode: 'center',
  },

  bannertextContainer: {
    alignItems: 'center',
  },

  bannertext: {
    fontSize: Scales.moderateScale(18),
    color: Colors.BLACK,
  },

  collapsedCard: {
    width: Scales.deviceWidth,
    alignItems: 'center',
  },

  slideContainer: {
    marginTop: Scales.deviceHeight * 0.01,
    height: Scales.deviceHeight * 0.25,
  },

  slideImage: {
    width: Scales.deviceWidth,
    height: Scales.deviceHeight * 0.25,
    resizeMode: 'cover',
  },

  loginText: {
    fontSize: Scales.moderateScale(20),
    color: Colors.TRANSPARENT_BLACK5,
  },

  promoCard: {
    width: Scales.deviceWidth * 0.98,
    height: Scales.deviceHeight * 0.2,
    marginTop: Scales.deviceHeight * 0.01,
    marginBottom: Scales.deviceHeight * 0.01,
    overflow: 'hidden',
  },
  promoInnerCard: {
    width: Scales.deviceWidth * 0.98,
    height: Scales.deviceHeight * 0.2,
    backgroundColor: '#f0b522',
  },
  promoImage: {
    width: Scales.deviceWidth * 0.17,
    height: Scales.deviceWidth * 0.17,
  },

  promoContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-around',
    //alignItems: 'center',
  },
  promoMiddleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#D1CFCF',
  },
  promoSideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%',
  },

  promoItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  promoText: {
    fontSize: Scales.moderateScale(14),
    fontWeight: '600',
    color: Colors.GRAY,
  },

  passInputContainer: {
    width: Scales.deviceWidth * 0.85,
    //borderBottomWidth: 2,
    //borderBottomColor: Colors.Accent,
    marginTop: Scales.deviceHeight * 0.01,
    //overflow: 'hidden',
  },

  passInput: {
    width: Scales.deviceWidth * 0.85,
    height: Scales.deviceHeight * 0.06,
    //borderBottomWidth: 2,
    //borderBottomColor: Colors.Accent,
    //marginTop: 30,
    //overflow: 'hidden',
  },

  underlineStyleBase: {
    width: Scales.deviceWidth * 0.16,
    //height: Scales.deviceHeight * 0.05,
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 2,
    borderColor: Colors.GRAY,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.Accent,
  },

  loginBtn: {
    flexDirection: 'row',
    width: Scales.deviceWidth * 0.45,
    height: Scales.deviceHeight * 0.06,
    backgroundColor: Colors.Accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: Scales.deviceHeight * 0.05,
  },

  loginBtnText: {
    color: Colors.WHITE,
    fontSize: Scales.moderateScale(25),
    fontWeight: '700',
    paddingLeft: Scales.moderateScale(8),
  },

  forgotContainer: {
    alignItems: 'center',
    width: Scales.deviceWidth * 0.8,
    paddingTop: Scales.deviceHeight * 0.04,
    paddingBottom: Scales.deviceHeight * 0.01,
    borderBottomWidth: 0.5,
  },

  registerContainer: {
    alignItems: 'center',
    width: Scales.deviceWidth * 0.8,
    paddingTop: Scales.deviceHeight * 0.04,
    paddingBottom: Scales.deviceHeight * 0.03,
  },

  forgotText: {
    fontSize: Scales.moderateScale(16),
    color: Colors.Accent,
    fontWeight: '700',
  },

  registerText: {},
});
