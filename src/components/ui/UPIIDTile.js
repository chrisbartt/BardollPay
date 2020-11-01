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

const UPIIDTile = props => {
  const [checked, setChecked] = useState(false);
  let Touch = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touch = TouchableNativeFeedback;
  }

  return (
    <View style={styles.Body}>
      <SharpCard style={styles.card}>
        <Text style={styles.upiIDText}>5567227</Text>
        <Text style={styles.upiStatusText}>Primary BHIM UPI ID</Text>
        <View style={styles.CheckBoxContainer}>
          <RoundCheckbox
            checked={checked}
            backgroundColor={Colors.BLUE}
            size={Scales.moderateScale(20)}
            onValueChange={() => {
              checked === true ? setChecked(false) : setChecked(true);
            }}
          />
          <Text style={styles.setUpiText}>
            Set your primary BHIM UPI ID as the default for all BHIM UPI
            transactions on Swadesi Pay
          </Text>
        </View>
      </SharpCard>
    </View>
  );
};
const styles = StyleSheet.create({
  Body: {
    flex: 1,
  },
  card: {
    width: Scales.deviceWidth,
    height: Scales.deviceHeight * 0.13,
    marginTop: Scales.moderateScale(15),
    paddingLeft: 10,
    justifyContent: 'space-around',
  },

  CheckBoxContainer: {
    flexDirection: 'row',
    width: Scales.deviceWidth * 0.9,
    alignItems: 'center',
    marginTop: Scales.moderateScale(5),
    paddingBottom: Scales.moderateScale(5),
  },

  upiIDText: {
    fontSize: Scales.moderateScale(20),
    fontWeight: 'bold',
    color: Colors.BLACK,
    paddingLeft: 5,
  },
  upiStatusText: {
    fontSize: Scales.moderateScale(18),
    paddingLeft: 5,
    color: Colors.GRAY,
  },
  setUpiText: {
    fontSize: Scales.moderateScale(10),
    paddingLeft: 5,
    color: Colors.GRAY,
  },
});

export default UPIIDTile;
