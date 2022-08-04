import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { NeuBuyBG } from '../../Assets/Images';
import { NeuBuyLogo } from '../../Assets/Images';
import { StyleWelcome } from '../../Assets/Style/styleWelcome';
import { uiConstants } from '../../Assets/uiConstants';

const WelcomePage = ({navigation}) => {
  const signUp = () => {
    navigation.navigate(uiConstants.loginPage);
  };
  const getStarted = () => {
    navigation.navigate(uiConstants.signUpPage);
  };
  return (
    <>
      <View style={StyleWelcome.container}>
        <ImageBackground
          style={StyleWelcome.image}
          source={NeuBuyBG}></ImageBackground>
        <View style={StyleWelcome.simage}>
          <Image source={NeuBuyLogo} style={{ width: 150, height: 150 }} />
        </View>
        <View style={StyleWelcome.Final}>
          <View style={StyleWelcome.letter}>
            <Text style={StyleWelcome.Bg} onPress={getStarted}>
              {' '}
              {uiConstants.getStarted}{' '}
            </Text>
          </View>
          <TouchableOpacity onPress={signUp}>
            <Text style={StyleWelcome.colour}>
              {uiConstants.iAlreadyHaveAnAccount}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default WelcomePage;