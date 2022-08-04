import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import addressPageStyle from '../Assets/Style/StyleAddressPage'
import { uiConstants } from '../Assets/uiConstants'
import { CancelImage } from '../Assets/Images'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CacheKeyConstants } from '../Assets/CacheKeyConstants'

const Address = (props) => {
  const {item, onPress,setDeleted} = props;
  const pressHandler = async () => {



    Alert.alert(uiConstants.neuBuy, uiConstants.delAddress, 
      [
      {
        text: 'NO',
        onPress: () => console.log(),
      },
      {
        text : 'YES',
        onPress:async () => {
          try {
            const allUsersData = JSON.parse(
              await AsyncStorage.getItem(CacheKeyConstants.userKey));
              const currentUserDetails = JSON.parse(await AsyncStorage.getItem(
                CacheKeyConstants.currentuserKey))
              for (let eachUserData of allUsersData){
                if(currentUserDetails.email==eachUserData.email){ 
                  for(let eachAddress of eachUserData.addresses ){
                    if(item.id == eachAddress.id){
                      eachUserData.addresses.splice(eachUserData.addresses.indexOf(eachAddress), 1)
                      await AsyncStorage.setItem(CacheKeyConstants.userKey, JSON.stringify(allUsersData))
                      setDeleted((prev)=>!prev)
                    }
                  }
                }
              }
            }
             catch (err) {
                console.log(err);
              }

        }
      }

    ]);




    
         

  }

  return (
    <View>
      < TouchableOpacity onPress={props.onPress} style={addressPageStyle.buttonContainer} >
        <Text style={addressPageStyle.text}>
          <Text style ={addressPageStyle.name}>{props.item.fullName}</Text>,
          {uiConstants.newLine}
          {props.item.fullAddress},
          {uiConstants.newLine}
          {props.item.landmark},
          {uiConstants.newLine}
          {props.item.pincode},
          {uiConstants.newLine}
          {props.item.mobileNumber}
          {uiConstants.newLine}
          {props.item.state}
          {uiConstants.newLine}
          {props.item.addressType}
        </Text>
        <TouchableOpacity onPress={() => pressHandler()} style={addressPageStyle.deletePosition}>
          <Image source={CancelImage} style={addressPageStyle.deleteAddress} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

export default Address