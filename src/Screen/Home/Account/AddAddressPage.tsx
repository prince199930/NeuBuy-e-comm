import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import TextInputEntry from '../../../Components/TextInputEntry';
import {uiConstants} from '../../../Assets/uiConstants';
import {styleAddAddress} from '../../../Assets/Style/styleAddAddressPage';
import SelectDropdown from 'react-native-select-dropdown';
import {state} from '../../../services/AddressPageServices';
import {addressType} from '../../../services/AddressPageServices';
import {StyleSignUp} from '../../../Assets/Style/styleSignUp';
import {CacheKeyConstants} from '../../../Assets/CacheKeyConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import addressPageStyle from '../../../Assets/Style/StyleAddressPage';
import CommonTopBar from '../../../Components/CommonTopBar';
import {Address} from '../../../Assets/Types/AddressType';
import { regexConstants } from '../../../Assets/regexConstants';

const AddAddressPage = ({navigation,route}) => {
  const {pageName}=route.params
  let userNamePlaceholder = uiConstants.fullName;
  let mobileNumberPlaceholder = uiConstants.mobileNumber;
  let pincodePlaceholder = uiConstants.pincode;
  let fullAddressPlaceholder = uiConstants.fullAddress;
  let landmarkPlaceholder = uiConstants.landmark;
  const [stateCounter, setStateCounter] = useState<Number>(0);
  const [addressCounter, setAddressCounter] = useState<Number>(0);
  const [selectedState, setSelectedState] = useState<String>('');
  const [selectedAddressType, setselectedAddressType] = useState<String>('');
  const [isError, setIsError] = useState<Boolean>(false);
  const [fullNameAlerts, setfullNameAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [mobileNumberAlerts, setmobileNumberAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [pincodeAlerts, setpincodeAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [fullAddressAlerts, setfullAddressAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [landmarkAlerts, setlandmarkAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [stateAlerts, setStateAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [addressTypeAlerts, setAddressTypeAlert] = useState<String>(
    uiConstants.emptyString,
  );

  const [fullName, setfullName] = useState<String>(uiConstants.emptyString);
  const [mobileNumber, setmobileNumber] = useState<string>(
    uiConstants.emptyString,
  );
  const [pincode, setpincode] = useState<string>(uiConstants.emptyString);
  const [fullAddress, setfullAddress] = useState<String>(
    uiConstants.emptyString,
  );
  const [landmark, setlandmark] = useState<String>(uiConstants.emptyString);

  const saveAddress = async () => {
    let userAddress: Address = 
      {
        id:1,
        fullName,
        mobileNumber,
        pincode,
        fullAddress,
        landmark,
        state: selectedState,
        addressType: selectedAddressType,
      }
    ;
    const allUsersData = JSON.parse(
      await AsyncStorage.getItem(CacheKeyConstants.userKey));
      
      const currentUserDetails = JSON.parse(await AsyncStorage.getItem(
        CacheKeyConstants.currentuserKey))
     const currentUserEmail=currentUserDetails.email  
     let newArray = [];
    for (let eachItem of allUsersData ){
      if (eachItem.email==currentUserEmail){
       
        if (uiConstants.addresses in eachItem){
          const length=eachItem.addresses.length
          if (length===0){
            userAddress.id=1
          }
          else{
           const newId=(eachItem.addresses[length-1].id)+1
           userAddress.id=newId
          }
          eachItem.addresses=eachItem.addresses.concat([userAddress])
          let addAddress = newArray.concat([eachItem]);
          newArray = addAddress;
        }
        else{
          eachItem.addresses = [userAddress];
          let addAddress = newArray.concat([eachItem]);
          newArray = addAddress;
        }
      }
      else{
        let unchangeItem = newArray.concat([eachItem]);
          newArray = unchangeItem;
      }
    } 
    await AsyncStorage.setItem(
          CacheKeyConstants.userKey,
          JSON.stringify(newArray),
      );
  };

  let errorfullNameComponent = (
    <Text style={StyleSignUp.errorText}>{fullNameAlerts}</Text>
  );
  let errormobileNumberComponent = (
    <Text style={StyleSignUp.errorText}>{mobileNumberAlerts}</Text>
  );
  let errorpincodeComponent = (
    <Text style={StyleSignUp.errorText}>{pincodeAlerts}</Text>
  );
  let errorfullAddressComponent = (
    <Text style={StyleSignUp.errorText}>{fullAddressAlerts}</Text>
  );
  let errorlandmarkComponent = (
    <Text style={StyleSignUp.errorText}>{landmarkAlerts}</Text>
  );
  let errorStateComponent = (
    <Text style={StyleSignUp.errorText}>{stateAlerts}</Text>
  );
  let errorAddressTypeComponent = (
    <Text style={StyleSignUp.errorText}>{addressTypeAlerts}</Text>
  );

  const fullNameChange = newfullName => {
    setfullName(newfullName);
    setfullNameAlert(uiConstants.emptyString);
  };
  const mobileNumberChange = newmobileNumber => {
    setmobileNumber(newmobileNumber);
    setmobileNumberAlert(uiConstants.emptyString);
  };

  const pincodeChange = newpincode => {
    setpincode(newpincode);
    setpincodeAlert(uiConstants.emptyString);
  };

  const fullAddressChange = newfullAddress => {
    setfullAddress(newfullAddress);
    setfullAddressAlert(uiConstants.emptyString);
  };

  const landmarkChange = newlandmark => {
    setlandmark(newlandmark);
    setlandmarkAlert(uiConstants.emptyString);
  };

  const regMobileNumber = regexConstants.regMobileNumber
  const regPincode = regexConstants.regPincode

  const Validate = (): void => {
    let count: number;
    count = 0;

    if (fullName.length === 0) {
      count++;
      setfullNameAlert(uiConstants.usernameAlert);
      setIsError(true);
    }

    if (!regMobileNumber.test(mobileNumber)) {
      count++;
      setmobileNumberAlert(uiConstants.mobileNumberAlert);
      setIsError(true);
    } else if (mobileNumber && mobileNumber.toString().length < 10) {
      count++;
      setmobileNumberAlert(uiConstants.phnoAlert);
      setIsError(true);
    }

    if (!regPincode.test(pincode)) {
      count++;
      setpincodeAlert(uiConstants.pincodeAlert);
      setIsError(true);
    } else if (pincode && pincode.toString().length < 6) {
      count++;
      setpincodeAlert(uiConstants.pinAlert);
      setIsError(true);
    }

    if (fullAddress.length === 0) {
      count++;
      setfullAddressAlert(uiConstants.fullAddressAlert);
      setIsError(true);
    }

    if (landmark.length === 0) {
      count++;
      setlandmarkAlert(uiConstants.landmarkAlert);
      setIsError(true);
    }
    if (stateCounter === 0) {
      count++;
      setStateAlert(uiConstants.stateAlert);
      setIsError(true);
    }
    if (addressCounter === 0) {
      count++;
      setAddressTypeAlert(uiConstants.addressTypeAlert);
      setIsError(true);
    }
    if (count === 0) {
      saveAddress();
      if(pageName === uiConstants.addressPage){
        navigation.navigate(uiConstants.addressPage);
      }
      else {
        navigation.navigate(uiConstants.checkoutPage)
      }
      
    }
    
  };

  return (
    <>
      <CommonTopBar
      Header={uiConstants.addAddress}
        style={styleAddAddress.bgcolor}
        navigation={navigation}
        display={false} />
      <ScrollView style={styleAddAddress.container}>
        <View style={styleAddAddress.addresscontainer}>
          <TextInputEntry
            placeholder={userNamePlaceholder}
            onChangeText={fullNameChange}
            isError={isError}
            errorUserNameComponent={errorfullNameComponent}
            value={fullName}
          />
          <TextInputEntry
            placeholder={mobileNumberPlaceholder}
            onChangeText={mobileNumberChange}
            isError={isError}
            errorUserNameComponent={errormobileNumberComponent}
            value={mobileNumber}
          />
          <TextInputEntry
            placeholder={pincodePlaceholder}
            onChangeText={pincodeChange}
            isError={isError}
            errorUserNameComponent={errorpincodeComponent}
            value={pincode}
          />
          <TextInputEntry
            placeholder={fullAddressPlaceholder}
            onChangeText={fullAddressChange}
            isError={isError}
            errorUserNameComponent={errorfullAddressComponent}
            value={fullAddress}
          />
          <TextInputEntry
            placeholder={landmarkPlaceholder}
            onChangeText={landmarkChange}
            isError={isError}
            errorUserNameComponent={errorlandmarkComponent}
            value={landmark}
          />

          <SelectDropdown
            buttonStyle={styleAddAddress.dropDownStyle}
            defaultButtonText={uiConstants.state}
            buttonTextStyle={styleAddAddress.dropDownTextStyle}
            data={state}
            onSelect={selectedItem => {
              setSelectedState(selectedItem);
              setStateCounter(1);
              setStateAlert(uiConstants.emptyString);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
          />
          {(isError && errorStateComponent) || (
            <Text>{uiConstants.emptyString}</Text>
          )}
          <SelectDropdown
            buttonStyle={styleAddAddress.dropDownStyle}
            defaultButtonText={uiConstants.addressType}
            buttonTextStyle={styleAddAddress.dropDownTextStyle}
            data={addressType}
            onSelect={selectedItem => {
              setselectedAddressType(selectedItem);
              setAddressCounter(1);
              setAddressTypeAlert(uiConstants.emptyString);
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
          />
          {(isError && errorAddressTypeComponent) || (
            <Text>{uiConstants.emptyString}</Text>
          )}
        </View>
        <View style={addressPageStyle.button}>
          <TouchableOpacity
            onPress={Validate}
            style={addressPageStyle.addressButton}>
            <Text style={addressPageStyle.buttonText}>
              {uiConstants.saveAddressText}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default AddAddressPage;