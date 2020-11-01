import React, {useState} from 'react';
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
import SharpCard from './SharpCard';
import RoundCheckbox from './roundCheckBox';

const AddressTile = props => {
  const [checked, setChecked] = useState(false);
  let Touch = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touch = TouchableNativeFeedback;
  }

  return (
    <View style={styles.HeaderBody}>
      <SharpCard style={styles.card}>
        <Text style={styles.addresrTypeText}>Home</Text>
        <Text style={styles.addressText}>
          
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
            <Text style={styles.btnText}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
            <Text style={styles.btnText}>Modify</Text>
          </TouchableOpacity>
        </View>
      </SharpCard>
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderBody: {
    flex: 1,
  },
  card: {
    width: Scales.deviceWidth,
    height: Scales.deviceHeight * 0.13,
    marginTop: Scales.moderateScale(15),
    paddingLeft: 10,
    justifyContent: 'space-around',
  },

  btnContainer: {
    flexDirection: 'row',
    width: Scales.deviceWidth * 0.9,
    alignItems: 'center',
  },

  addresrTypeText: {
    fontSize: Scales.moderateScale(20),
    color: Colors.BLACK,
    paddingLeft: 5,
  },
  addressText: {
    fontSize: Scales.moderateScale(14),
    paddingLeft: 5,
    color: Colors.GRAY,
  },
  btn: {
    // height: Scales.moderateScale(25),
  },
  btnText: {
    fontSize: Scales.moderateScale(15),

    margin: 5,
    color: Colors.BLUE,
  },
});

export default AddressTile;
