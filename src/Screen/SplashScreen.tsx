import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { SplashImage } from '../Assets/Images';
import globalStyles from '../Assets/Style/styleSplash';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcomepage');
    }, 3000);
  }, []);

  return <Image source={SplashImage} style={globalStyles.splashimage}></Image>;
}
export default SplashScreen;