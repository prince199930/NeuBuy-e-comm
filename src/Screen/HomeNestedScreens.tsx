import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsPage from './Home/Product/ProductDetailsPage';
import { uiConstants } from '../Assets/uiConstants';
import MyCartPage from './Home/Product/MyCartPage';
import HomeScreen from './Home/HomeScreen';
import Checkout from './Home/Product/Checkout';
import MyOrders from '../Components/MyOrders';
import AddAddressPage from './Home/Account/AddAddressPage';
import FallBack from '../Components/FallBack';
import { ErrorBoundary } from 'react-error-boundary';


const HomeNestedScreens = () => {
  const Stack = createStackNavigator();
 
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name={uiConstants.homeScreen}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={uiConstants.productDetailsPage}
        component={ProductDetailsPage}
        options={{headerShown: false}}
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
        name={uiConstants.addAddressPage}
        component={AddAddressPage}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={uiConstants.myOrder}
        component={MyOrders}
        options={{headerShown: false}}
      />
      <Stack.Screen
            name="bd"
            component={FallBack}
            options={{ headerShown: false }}
            />
    </Stack.Navigator>
  );
};

export default HomeNestedScreens;