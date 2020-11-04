import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  PermissionsAndroid,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import InnerHeader from '../../components/ui/innerHeader';
import {Scales, Colors} from '@common';
import styles from './kyc.styles';
import PickerSelect from '../../components/dropDown/dropdown';

const KycScreen = (props) => {
  const [imageSource, setImageSource] = useState(null);
  const [panNumber, setPanNumber] = useState(null);
  const [res, setRes] = useState();

  const uploadKyc = async () => {
    props.navigation.goBack();
  };

  const selectPhotoTapped = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
    }

    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        // console.log('User cancelled photo picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = response;

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        setImageSource(source);
      }
    });
  };

  let data = [
    {label: 'Aadhar Card', value: 'football'},
    {label: 'PAN Card', value: 'baseball'},
    {label: 'Election Card', value: 'hockey'},
  ];
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <InnerHeader
        iconLeft={'menu'}
        title={'KYC'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
      <View style={styles.Conatainer}>
        <View style={styles.dropdownContainer}>
          <PickerSelect
            onValueChange={(value) => console.log(value)}
            items={data}
            placeholder={{
              label: 'Select KYC Type',
              value: null,
              color: '#9EA0A4',
            }}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <TextInput
            placeholder={'ENTER PAN CARD NUMBER'}
            placeholderTextColor={'#b0b2b5'}
            style={styles.panInput}
            value={panNumber}
            onChangeText={(text) => {
              setPanNumber(text);
            }}
          />
        </View>
        <View>
          {imageSource === null ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                selectPhotoTapped();
              }}>
              <LinearGradient
                colors={['#f0b522', '#f0b522']}
                style={styles.uploadBtn}>
                <Text style={styles.uploadText}>Upload Picture</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <ImageBackground
              style={styles.image}
              source={{uri: imageSource.uri}}>
              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() => {
                  setImageSource(null);
                }}>
                <Icon name={'close-outline'} size={25} color={Colors.WHITE} />
              </TouchableOpacity>
            </ImageBackground>
          )}
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          uploadKyc();
        }}>
        <LinearGradient
          colors={['#f0b522', '#f0b522']}
          style={styles.bottomBtn}>
          <Text style={styles.btnText}>SUBMIT</Text>
        </LinearGradient>
        <SafeAreaView backgroundColor={Colors.Accent} />
      </TouchableOpacity>
    </View>
  );
};

export default KycScreen;
