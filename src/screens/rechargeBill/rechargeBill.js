import React, {useState, useEffect, useRef, Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Easing,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import PickerSelect from '../../components/dropDown/dropdown';
import Card from '../../components/ui/Card';
import InnerHeader from '../../components/ui/innerHeader';
import {Colors, Scales} from '@common';
import styles from './rechargeBill.styles';

const RechargeScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const serviceName = props.navigation.getParam('serviceName');
  let operatorData = [
    {label: 'Vodacom', value: 'Vodacom'},
    {label: 'Airtel', value: 'Airtel'},
    {label: 'Orange', value: 'Orange'},
    {label: 'Africel', value: 'Africell'},
  ];

  let cercleData = [
    {label: 'RDC', value: 'Vodacom'},
    {label: 'RDC', value: 'Airtel'},
    {label: 'RDC', value: 'Orange'},
    {label: 'RDC', value: 'Africell'},
  ];

  const isBillPay = () => {
    if (
      serviceName === 'DTH' ||
      serviceName === 'Gas' ||
      serviceName === 'Power Bill'
    ) {
      return true;
    } else {
      return false;
    }
  };

  // item.name === 'Prepaid' ||
  //   item.name === 'DTH';

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <InnerHeader
        iconLeft={'chevron-back'}
        title={serviceName}
        onLeftIconPress={() => {
          props.navigation.goBack();
        }}
      />
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <View style={styles.midContainer}>
          <Card style={styles.offerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.offerTitle}>20% de reduction</Text>
              <Text style={styles.offerDesc}>
                Payez avec votre solde de BardollPay et obtenez une reduction
              </Text>
            </View>
            <View>
              <Image
                style={styles.offerIcon}

              />
            </View>
          </Card>

          <Card style={styles.card}>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: phone ? '#dec866' : 'gray',
              }}>
              <Icon name={'call-outline'} size={24} color={'#dec866'} />
              <TextInput
                style={styles.body}
                placeholder={
                  serviceName === 'DTH'
                    ? 'Entrez votre numéro abonné'
                    : "Entrer le type d'abonnement"
                }
                autoCompleteType={'tel'}
                keyboardType={'phone-pad'}
                maxLength={10}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                onBlur={() => {}}
              />
            </View>
            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: amount ? '#dec866' : 'gray',
              }}>
              <Icon
                name={'file-tray-full-outline'}
                size={24}
                color={'#dec866'}
              />

              <View style={styles.InputWraper}>
                <PickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={operatorData}
                  placeholder={{
                    label: 'Selectionnez votre Oparateur',
                    value: null,
                    color: '#dec866',
                  }}
                />
              </View>
            </View>
            {!isBillPay() && (
              <View
                style={{
                  ...styles.phoneInputContainer,
                  borderColor: amount ? '#dec866' : 'gray',
                }}>
                <Icon name={'locate-outline'} size={24} color={'#dec866'} />
                <View style={styles.InputWraper}>
                  <PickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={cercleData}
                    placeholder={{
                      label: 'Selectionnez votre zone ',
                      value: null,
                      color: '#dec866',
                    }}
                  />
                </View>
              </View>
            )}

            <View
              style={{
                ...styles.phoneInputContainer,
                borderColor: amount ? '#dec866' : 'gray',
              }}>
              <Icon name={'card-outline'} size={24} color={'#dec866'} />
              <TextInput
                style={styles.body}
                placeholder={'Amount'}
                autoCompleteType={'tel'}
                keyboardType={'phone-pad'}
                maxLength={5}
                onChangeText={(text) => setAmount(text)}
                value={amount}
              />
            </View>
          </Card>
          <View style={styles.loginBtnSection}>
            <View style={styles.loginBtnContainer}>
              {loading ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                <TouchableOpacity
                  style={styles.loginBtn}
                  activeOpacity={0.7}
                  onPress={() => {
                    resetPass();
                  }}>
                  <Text style={styles.loginBtnText}>Soumettre</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RechargeScreen;
