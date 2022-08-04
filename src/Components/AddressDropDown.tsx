import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DropDownImage } from '../Assets/Images';
import { CheckoutbuttonStyles } from '../Assets/Style/styleCheckout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Address} from '../Assets/Types/AddressType';
import {uiConstants} from '../Assets/uiConstants';
import {CacheKeyConstants} from '../Assets/CacheKeyConstants';

const AddressDropDown = ({navigation,value, onSelect = (data: Address) => {}}) => {
  const [showOption, setShowOption] = useState(false);
  const [addressType,setAddressType]=useState("")
  const onSelectedItem = val => {
    setShowOption(false);
    onSelect(val);
    setAddressType(val.fullName)
   
  };

  const [address, setAddress] = useState<Address[]>([]);
  useEffect(() => {
   let fetchingData =  setTimeout(()=>{
      fetchData();
    },0)
    return()=>{
      clearTimeout(fetchingData)
    }

  }, [address])

  const fetchData = async () => {
    let value = JSON.parse(await AsyncStorage.getItem(CacheKeyConstants.userKey));
    let curUser = JSON.parse(await AsyncStorage.getItem(CacheKeyConstants.currentuserKey));
    for( let eachItem of value){
      if (eachItem.email== curUser.email){
        if (uiConstants.addressesText in eachItem){
          setAddress(eachItem.addresses)
          
         
        }
        
      }
    }
  }

  
  return (
    
    <View>
      
      <TouchableOpacity
        style={CheckoutbuttonStyles.dropdown}
        activeOpacity={0.8}
        onPress={() => setShowOption(!showOption)}>
      
        <Text style={CheckoutbuttonStyles.dropbox}>
          {!!value ? addressType: uiConstants.selectShippingAddress}
          
        </Text>
        <Image
          style={{position:"absolute", right:5,
            transform: [{rotate: showOption ? '180deg' : '0deg'}],
          }}
          source={DropDownImage}
        />
        
      </TouchableOpacity>
      {showOption && address!=null && (
        <View> 
          {address.map((val, i) => {
            return (
              
              <View key={i}>
              <TouchableOpacity
                
                onPress={() => onSelectedItem(val)}>

                <View style={CheckoutbuttonStyles.container}>
                  <Text style={CheckoutbuttonStyles.font}>{val.fullName}</Text>
                  <Text>{val.fullAddress}</Text>
                  <Text>{val.landmark}</Text>
                  <Text>{val.state}</Text>
                  <Text>{val.pincode}</Text>
                  <Text>{val.mobileNumber}</Text>
                </View>
              </TouchableOpacity>
              </View>
            );
          })}
        </View>
      )}
        {showOption && address.length==0 && (
          <View style={CheckoutbuttonStyles.noAddress}>
          <Text>{uiConstants.noAddressText}</Text>
          </View>
        )}
    </View>
  );
};

export default AddressDropDown;
