import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddressDetails from '../../../Components/AddressDetails';
import addressPageStyle from '../../../Assets/Style/StyleAddressPage';
import CommonTopBar from '../../../Components/CommonTopBar';
import {uiConstants} from '../../../Assets/uiConstants';
import {CacheKeyConstants} from '../../../Assets/CacheKeyConstants';
import {Address} from '../../../Assets/Types/AddressType';

const AddressPage = ({ navigation }) => {

  const [address, setAddress] = useState<Address[]>([]);
  const [deleted,setDeleted]=useState(false)

  const GoToNewAddressPage = (): void => navigation.navigate(uiConstants.addAddressPage, {pageName:uiConstants.addressPage});
  
  useEffect(() => {
    let gettingData = setTimeout(()=>{
      getAddress();
    },0)
    return () => {
      clearTimeout(gettingData);
    }
    
  }, [deleted,address]);
  const getAddress = async () => {
    try {
    const allUsersData = JSON.parse(
      await AsyncStorage.getItem(CacheKeyConstants.userKey));
      const currentUserDetails = JSON.parse(await AsyncStorage.getItem(CacheKeyConstants.currentuserKey))
      for (let eachUserData of allUsersData){
        if(currentUserDetails.email==eachUserData.email){
          setAddress(eachUserData.addresses)
        }
      }}
     catch (err) {
        console.log(err);
      }
  };
  return (
    <>
      <CommonTopBar
      Header={uiConstants.addAddressesHeaderText}
        style={addressPageStyle.bgcolor}
        navigation={navigation}
        display={false} />
        {address && address.length>0?
      <View style={addressPageStyle.container}>
        <FlatList
          data={address}
          renderItem={({item, index}) => (
            
            <View>
              
              <View> 
              <Text style={addressPageStyle.text2}>
                {uiConstants.addressText} {index + 1}
              </Text>
              <AddressDetails item={item} setDeleted={setDeleted}/>
              </View>
              </View>
          )}
        />
        </View>:<View style={addressPageStyle.blankText}><Text style={addressPageStyle.blankView} >{uiConstants.noAddressText}</Text></View>}
        <View style={addressPageStyle.button}>
          <TouchableOpacity
            onPress={GoToNewAddressPage}
            style={addressPageStyle.addressButton}>
            <Text style={addressPageStyle.buttonText}>
              {uiConstants.addNewAddressText}
            </Text>
          </TouchableOpacity>
        </View>
      
    </>
  );
};
export default AddressPage;