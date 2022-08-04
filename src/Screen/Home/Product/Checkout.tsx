import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import AddressDropDown from '../../../Components/AddressDropDown';
import { CheckoutbuttonStyles } from '../../../Assets/Style/styleCheckout';
import TextInputEntry from '../../../Components/TextInputEntry';
import { uiConstants } from '../../../Assets/uiConstants';
import { StyleSignUp } from '../../../Assets/Style/styleSignUp';
import CommonTopBar from '../../../Components/CommonTopBar';
import { regexConstants } from '../../../Assets/regexConstants';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../HomeScreen';
import { addOrders, cartOrders } from '../../../state/action-creators/actionCreators';
const Checkout = ({ navigation }) => {

  const regEXExpiry = regexConstants.regEXExpiry;
  const regName = regexConstants.regName
  const regCvv = regexConstants.regCvv
  const regUserCard = regexConstants.regUserCard
  const dispatch = useDispatch()
  const cart = useSelector((state: StateType) => state.cart)
  const order = useSelector((state: StateType) => state.order)
  const totalValue =
  cart.length &&
  cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const submit = () => {

    let count = 0

    if (!regName.test(userName)) {
      count++
      setUserNameAlert(uiConstants.nameAlert)
      setIsError(true)
    }
    if (!regUserCard.test(userCard)) {
      count++
      setUserCardAlert(uiConstants.cardAlert)
      setIsError(true)

    }
    if (!regEXExpiry.test(userExpiry)) {
      count++
      setUserExpiryAlert(uiConstants.expiryAlert)
      setIsError(true)

    }
    if (!regCvv.test(userCvv)) {
      count++
      setUserCvvAlert(uiConstants.cvvAlert)
      setIsError(true)

    }

    if (selectedItem == null) {
      count++
      Alert.alert(uiConstants.neuBuy, uiConstants.addressNotSelectedText)

    }
    
      if (count==0){
        const myOrder = {
          orderId:Math.floor(Math.random()* 10000000000000000) + 1,
          today:new Date().toDateString(),
          items:cart,
          Address:"address",
          totalValue:totalValue
        }
        dispatch(addOrders(myOrder))
        
  dispatch(cartOrders())
        Alert.alert(uiConstants.neuBuyText,uiConstants.neuBuyOrder,
        [{
           text: "OK", onPress: () => navigation.navigate(uiConstants.homeScreen) 

        }])

      }}
      const newAddressButton = () => {
        navigation.navigate(uiConstants.addAddressPage, { pageName: uiConstants.checkoutPage })
      }
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = item => {
    setSelectedItem(item);
  };
  const [isError, setIsError] = useState<Boolean>(false);
  const [userName, setUserName] = useState<any>(uiConstants.emptyString);
  const [userNameAlerts, setUserNameAlert] = useState<String>('');

  let errorUserNameComponent = (
    <Text style={StyleSignUp.errorText}>{userNameAlerts}</Text>
  );
  const userNameChange = newUserName => {
    setUserName(newUserName);
    setUserNameAlert(uiConstants.emptyString);
  };
  const [userCard, setUserCard] = useState<any>(uiConstants.emptyString);
  const [userCardAlerts, setUserCardAlert] = useState<string>('');
  let errorUserCardComponent = (
    <Text style={StyleSignUp.errorText}>{userCardAlerts}</Text>
  );
  const userCardChange = newUserCard => {
    setUserCard(newUserCard);
    setUserCardAlert(uiConstants.emptyString);
  };
  const [userExpiry, setUserExpiry] = useState<any>(uiConstants.emptyString);
  const [userExpiryAlerts, setUserExpiryAlert] = useState<string>('');
  let errorUserExpiryComponent = (
    <Text style={StyleSignUp.errorText}>{userExpiryAlerts}</Text>
  );
  const userExpiryChange = newUserExpiry => {
    setUserExpiry(newUserExpiry);
    setUserExpiryAlert(uiConstants.emptyString);
  };
  const [userCvv, setUserCvv] = useState<any>(uiConstants.emptyString);
  const [userCvvAlerts, setUserCvvAlert] = useState<string>('');
  let errorUserCvvComponent = (
    <Text style={StyleSignUp.errorText}>{userCvvAlerts}</Text>
  );
  const userCvvChange = newUserExpiry => {
    setUserCvv(newUserExpiry);
    setUserCvvAlert(uiConstants.emptyString);
  };

  return (
    <>
      <ScrollView>
        <CommonTopBar
        Header={uiConstants.billing}
          style={CheckoutbuttonStyles.bgcolor}
          navigation={navigation}
          display={false}  />
        <View style={CheckoutbuttonStyles.newAddressButton}>
          <TouchableOpacity onPress={newAddressButton}>

            <Text style={CheckoutbuttonStyles.newaddressText}>
              {uiConstants.newAddressText}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <AddressDropDown
            value={selectedItem}
            onSelect={onSelect}
            navigation={navigation}
          />
        </View>
        <View >
          <Text style={CheckoutbuttonStyles.payment}>
            {uiConstants.paymentText}
          </Text>
          <Text style={CheckoutbuttonStyles.Name}>
            {uiConstants.creditCardText}
          </Text>
        </View>
        <View style={CheckoutbuttonStyles.Card}>
          <View>
            <TextInputEntry
              onChangeText={userNameChange}
              placeholder={uiConstants.name}
              isError={isError}
              errorUserNameComponent={errorUserNameComponent}
              value={userName}
            />
            <TextInputEntry
              onChangeText={userCardChange}
              placeholder={uiConstants.cardNumber}
              isError={isError}
              errorUserNameComponent={errorUserCardComponent}
              value={userCard}
            />
            <TextInputEntry placeholder={uiConstants.expiry}
              onChangeText={userExpiryChange}
              isError={isError}
              errorUserNameComponent={errorUserExpiryComponent}
              value={userExpiry}
            />
            <TextInputEntry placeholder={uiConstants.cvv}
              onChangeText={userCvvChange}
              isError={isError}
              errorUserNameComponent={errorUserCvvComponent}
              value={userCvv} />
          </View>
        </View>
        <View>
        </View>
        <View>
          <TouchableOpacity onPress={submit} style={CheckoutbuttonStyles.checkoutButton}>
            <Text style={CheckoutbuttonStyles.btnstyle1}>{uiConstants.checkoutText}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Checkout;
