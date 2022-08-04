import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { uiConstants } from '../Assets/uiConstants';
import ProfileScreen from './Home/Account/ProfileScreen';
import AddressPage from './Home/Account/AddressPage';
import AddAddressPage from './Home/Account/AddAddressPage';
import MyCartPage from '../Screen/Home/Product/MyCartPage';
import Checkout from './Home/Product/Checkout';
import MyOrders from '../Components/MyOrders'

const ProfileNestedScreens = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={uiConstants.profileScreenName}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={uiConstants.addressPage}
        component={AddressPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={uiConstants.addAddressPage}
        component={AddAddressPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={uiConstants.myCartPage}
        component={MyCartPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={uiConstants.checkoutPage}
        component={Checkout}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={uiConstants.myOrder}
        component={MyOrders}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNestedScreens;