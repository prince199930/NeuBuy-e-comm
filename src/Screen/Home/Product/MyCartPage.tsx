import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import CartItem from '../../../Components/CartItem';
import {CartStyle} from '../../../Assets/Style/styleMyCart';
import {useSelector} from 'react-redux';
import {StateType} from '../HomeScreen';
import {uiConstants} from '../../../Assets/uiConstants';
import CommonTopBar from '../../../Components/CommonTopBar';

const MyCartPage = ({navigation}) => {
  const cart = useSelector((state: StateType) => state.cart);
  const totalValue =
    cart.length &&
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const Checkout = () => {
    
    navigation.navigate(uiConstants.checkoutPage);
  }
  return (
    <>
      <CommonTopBar
      Header={uiConstants.shoppingCart}
        style={CartStyle.bgcolor}
        navigation={navigation}
        display={false}      />
      <View style={CartStyle.textBox}>
  
        {totalValue!==0 ?
        <View>
          <Text style={CartStyle.text}>
            {uiConstants.totalAmount} {uiConstants.rupeeSign}
            {totalValue.toFixed(2)}
          </Text>
        </View>:
        <View>
          <Text></Text>
        </View>}
      </View>
      <View style={CartStyle.list}>
        <FlatList
          data={cart}
          renderItem={({item, index}) => (
            <View>
              <CartItem item={item} index={index} />
            </View>
          )}
        />
      </View>
      { cart.length > 0 ? 
      <View>
        
        <TouchableOpacity  onPress={Checkout} style={CartStyle.checkoutButton}>
          <Text>{uiConstants.proceedToBuy}</Text>
        </TouchableOpacity>
      </View> :
      <View style={CartStyle.cartEmptyText}>
        <Text style={CartStyle.cartEmptyText}>{uiConstants.emptyCartText}</Text>
      </View>}
    </>
  );
};

export default MyCartPage;
