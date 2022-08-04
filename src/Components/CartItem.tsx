import {View, Text, Image, Alert} from 'react-native';
import React from 'react';
import StyleCartItem from '../Assets/Style/StyleCartItems';
import Stepper from './Stepper';
import {CancelImage} from '../Assets/Images';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {delCartItem} from '../state/action-creators/actionCreators';
import {uiConstants} from '../Assets/uiConstants';

const CartItem = ({item, index}) => {
  const dispatch = useDispatch();
  const {id, image, price, title} = item;
  const pressHandler = key => {


    Alert.alert(uiConstants.neuBuy, uiConstants.delItem, 
      [
      {
        text: 'NO',
        onPress: () => console.log()
      },
      {
        text : 'YES',
        onPress:() => dispatch(delCartItem(key))
      }

    ]);
  };
  return (
    <View style={StyleCartItem.container}>
      <View style={StyleCartItem.imageContainer}>
        <Image source={{ uri: image }} style={StyleCartItem.image} />
      </View>
      <View style={StyleCartItem.detailsContainer}>
        <View>
          <ScrollView
            style={StyleCartItem.textContainer}
            showsVerticalScrollIndicator={false}>
            <Text>{title}</Text>
          </ScrollView>
          <View style={StyleCartItem.priceText}>
            <Text>
              {uiConstants.rupeeSign}
              {price}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Stepper item={item} index={index} />
            <TouchableOpacity
              onPress={() => pressHandler(id)}
              style={StyleCartItem.cancelPosition}>
              <Image source={CancelImage} style={StyleCartItem.cancel} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CartItem;
