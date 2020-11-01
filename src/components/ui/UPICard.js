import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import {Scales, Colors} from '@common';

const UPICard = props => {
  return (
    <View>
      <Card style={styles.card}>
        <TouchableOpacity
          style={styles.imageContainer}
          activeOpacity={0.6}
          onPress={props.onContactPress}>
          <Image
            source={require('../../assets/img/tocontact.png')}
            style={styles.image}
          />
          <Text style={styles.nameText}> Envoyer</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.imageContainer}
          activeOpacity={0.6}
          onPress={props.onSelfPress}>
          <Image
            source={require('../../assets/img/self.png')}
            style={styles.image}
          />
          <Text style={styles.nameText}> Retirer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          activeOpacity={0.6}
          onPress={props.onBalancePress}>
          <Image
            source={require('../../assets/img/balance.png')}
            style={styles.image}
          />
          <Text style={styles.nameText}> Votre solde</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Scales.deviceWidth * 0.8,
    height: Scales.deviceHeight * 0.1,
    marginTop: Scales.deviceHeight * 0.01,
    marginBottom: Scales.deviceHeight * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageContainer: {
    width: Scales.deviceWidth * 0.2,
    height: Scales.deviceWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: Scales.deviceWidth * 0.08,
    height: Scales.deviceWidth * 0.08,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: Scales.moderateScale(9),
    fontWeight: '600',
    color: Colors.GRAY,
  },
});

export default UPICard;
