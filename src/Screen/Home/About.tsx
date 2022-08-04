import {View, Text} from 'react-native';
import React from 'react';
import {stylesAbout} from '../../Assets/Style/styleAbout';
import {uiConstants} from '../../Assets/uiConstants';


const About = () => {
  return (
    <View style={stylesAbout.container}>
      <Text style={stylesAbout.discover}> {uiConstants.discover} </Text>
    </View>
  );
};

export default About;
