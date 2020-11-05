import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ImageSlider from '../../components/imageSlider/imageSlider';
import CustomHeader from '../../components/ui/CustomHeader';
import Card from '../../components/ui/Card';
import ContactTile from '../../components/ui/ContactTile';
import ServiceTile from '../../components/ui/ServiceTile';
import {Colors, Scales} from '@common';
import styles from './home.styles';
import UPICard from '../../components/ui/UPICard';
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from '../../components/collapsible/collapsible';
import QRCodeScanner from 'react-native-qrcode-scanner';

const HomeScreen = (props) => {

  const services = useSelector((state) => state.HomeData.services);
  const [showUPI, setShowUPI] = useState(true);
  const [showQR, setShowQR] = useState(false);

  const onServicePress = (item) => {
    console.log(item);
    if (
      item.name === 'Prepaid' ||
      item.name === 'DTH' ||
      item.name === 'Gas' ||
      item.name === 'Power Bill'
    ) {
      props.navigation.navigate('Recharge', {
        serviceName: item.name,
      });
    } else {
      // to do
    }
  };

  const navigateToContact = (e) => {
    props.navigation.navigate('SendToContact');
  };

  const onSuccess = (e) => {
    console.log(e.data);
    setShowQR(false);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        animated={true}
      />
      <CustomHeader
        iconLeft={'menu'}
        onLeftIconPress={() => {
          props.navigation.toggleDrawer();
        }}
        onQRPress={() => {
          setShowQR(true);
        }}
        onBellPress={() => {
          props.navigation.navigate('BillNotification');
        }}
      />
      <Modal
        animationType="slide"
        transparent={false}
        hardwareAccelerated
        visible={showQR}
        onRequestClose={() => {
          setShowQR(false);
        }}>
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <SafeAreaView>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                padding: 10,
              }}
              onPress={() => {
                setShowQR(false);
              }}>
              <Icon
                name={'close-circle-outline'}
                size={40}
                color={Colors.WHITE}
              />
            </TouchableOpacity>
          </SafeAreaView>
          <QRCodeScanner onRead={onSuccess} fadeIn={false} showMarker={true} />
        </View>
      </Modal>

      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.bannerCard}>
            <View style={styles.bannertextContainer}>
              <Text style={styles.bannertext}>Cliquez pour effectuer vos opérations</Text>
            </View>
            <View style={styles.bannerImgContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setShowUPI(!showUPI);
                }}>
                <Image
                  style={styles.upiBanner}
                  source={require('../../assets/img/logo.png')}
                />
              </TouchableOpacity>

            </View>
          </Card>
          <Collapsible collapsed={showUPI} easing={'exp'}>
            <View style={styles.collapsedCard}>
              <UPICard
                onContactPress={() => {
                  navigateToContact();
                }}
              />
            </View>
          </Collapsible>

          <Card style={styles.promoCard}>
            <View style={styles.promoInnerCard}>
              <View style={styles.bannertextContainer}>
                <Text style={styles.bannertext}>Payer</Text>
              </View>
              <View style={styles.promoContainer}>
                <View style={styles.promoSideContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => { }}>
                    <Image
                      source={require('../../assets/img/prepaid.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Achetez</Text>
                    <Text style={styles.promoText}>des unités</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.promoMiddleContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/internet.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Achetez des</Text>
                    <Text style={styles.promoText}>Données mobiles</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.promoSideContainer}>

                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/parabolic.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Achetez des</Text>
                    <Text style={styles.promoText}>Bouquets TV</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>

          <Card style={styles.promoCard}>
            <View style={styles.promoInnerCard}>
              <View style={styles.bannertextContainer}>
                <Text style={styles.bannertext}>Faites vos réservations</Text>
              </View>
              <View style={styles.promoContainer}>
                <View style={styles.promoSideContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => { }}>
                    <Image
                      source={require('../../assets/img/flight.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Reservez</Text>
                    <Text style={styles.promoText}>Un vol</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.promoMiddleContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/hotel.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Reservez</Text>
                    <Text style={styles.promoText}>un hotel</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.promoSideContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/bus.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Réservez</Text>
                    <Text style={styles.promoText}>un taxi</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>

          <Card style={styles.promoCard}>
            <View style={styles.promoInnerCard}>
              <View style={styles.bannertextContainer}>
                <Text style={styles.bannertext}>Souscrire aux abonnements</Text>
              </View>
              <View style={styles.promoContainer}>
                <View style={styles.promoSideContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => { }}>
                    <Image
                      source={require('../../assets/img/insurance.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Souscrivez à</Text>
                    <Text style={styles.promoText}>une assurance</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.promoMiddleContainer}>
                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/powerbill.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Souscrivez à</Text>
                    <Text style={styles.promoText}>l'electricité</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.promoSideContainer}>

                  <TouchableOpacity
                    style={styles.promoItemContainer}
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Image
                      source={require('../../assets/img/gas.png')}
                      style={styles.promoImage}
                    />
                    <Text style={styles.promoText}>Souscrivez aux</Text>
                    <Text style={styles.promoText}>sercices du gaz</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>

        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
