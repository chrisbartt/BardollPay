/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Scales, Colors} from '@common';
import {SliderBox} from './slider/dist/SliderBox';

const ImageSlider = props => {
  const images = useSelector(state => state.SlideImages.homeSlideImages);
  return (
    <View style={{flex: 1}}>
      <SliderBox
        images={images}
        sliderBoxHeight={Scales.deviceHeight * 0.25}
        //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        //currentImageEmitter={index => console.warn(`image ${index} pressed`)}
        dotColor={Colors.Accent}
        inactiveDotColor={Colors.GRAY}
        paginationBoxVerticalPadding={20}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: 'rgba(128, 128, 128, 0.92)',
        }}
        autoplay
        circleLoop
        ImageComponentStyle={{borderRadius: 0, width: '100%', marginTop: 0}}
        imageLoadingColor={Colors.Accent}
      />
    </View>
  );
};

export default ImageSlider;
