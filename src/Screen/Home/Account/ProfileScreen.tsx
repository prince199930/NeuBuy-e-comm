import React, {useState, useEffect} from 'react';
import AppButton from '../../../Components/AppButton';
import {Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {uiConstants} from '../../../Assets/uiConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import profilePageStyle from '../../../Assets/Style/styleProfilePage';
import CameraOptions from '../../../Components/CameraOptions';
import {CacheKeyConstants} from '../../../Assets/CacheKeyConstants';
import CommonTopBar from '../../../Components/CommonTopBar';

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [active, setActive] = useState(false);
  var Avatar = uiConstants.imageUrl;
  
  const [cameraImage, setCameraImage] = useState(Avatar);

  const imageOptions = () => {
    setActive(true);
  };

  const pressHandlerLogout = async () => {
    
    await AsyncStorage.removeItem(CacheKeyConstants.currentuserKey);
   
    navigation.push(uiConstants.loginPage);
    
  };
  const presshandlerAddresses = () => {
    navigation.navigate(uiConstants.addressPage);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(
        CacheKeyConstants.currentuserKey,
      );
      const totalValue = JSON.parse(
        await AsyncStorage.getItem(CacheKeyConstants.userKey),
      );
      if (value != null) {
        let user = JSON.parse(value);
        setUser(user.username);
        for (let each of totalValue) {
          if (user.username == each.username) {
            if (uiConstants.imageLink in each) {
              setCameraImage(each.imagelink);
            }
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CommonTopBar
       Header={uiConstants.headerText}
        style={profilePageStyle.bgcolor}
        navigation={navigation}
        display={false}
         />
      
      
      
        <TouchableOpacity onPress={imageOptions}>
          <Image style={profilePageStyle.avatar} source={{uri: cameraImage}} />
        </TouchableOpacity>
      <View style={profilePageStyle.inputView}>
        <Text style={profilePageStyle.username}>{user}</Text>
      </View>
      <SafeAreaView style={profilePageStyle.screenContainer}>
        <View style={profilePageStyle.screenContainer}>
          <AppButton label={uiConstants.loginInfoText}> </AppButton>
          <AppButton
            onPress={presshandlerAddresses}
            label={uiConstants.addText}
          />
          <AppButton onPress={()=>navigation.navigate(uiConstants.myOrder)} label={uiConstants.ordersText} />
        </View>
     
      
      <TouchableOpacity
        onPress={pressHandlerLogout}
        style={profilePageStyle.signoutBtn}>
        <Text style={profilePageStyle.signoutText}>
          {uiConstants.signOutText}
        </Text>
      </TouchableOpacity>
      </SafeAreaView>
      <CameraOptions
        active={active}
        setActive={setActive}
        setCameraImage={setCameraImage}
        cameraImage={cameraImage}
        username={user}
      />
    </>
  );
};

export default ProfileScreen;
