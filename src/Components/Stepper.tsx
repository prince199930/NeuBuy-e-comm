import { View, Text } from 'react-native';
import React from 'react';
import StyleStepper from '../Assets/Style/StyleStepper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {uiConstants} from '../Assets/uiConstants';
import {incQty, decQty} from '../state/action-creators/actionCreators';
import {useDispatch} from 'react-redux';

const Stepper = ({item, index}) => {
  const dispatch = useDispatch();
  const {quantity} = item;

  const pressHandlerPlus = () => {
    dispatch(incQty(index));
  };
  const pressHandlerMinus = () => {
    if (quantity > 1) {
      dispatch(decQty(index));
    }
  };
  return (
    <View style={StyleStepper.container}>
      <TouchableOpacity style={StyleStepper.minus} onPress={pressHandlerMinus}>
        <Text style={StyleStepper.minusText}>{uiConstants.minus}</Text>
      </TouchableOpacity>
      <View style={StyleStepper.quantity}>
        <Text>{quantity}</Text>
      </View>
      <TouchableOpacity style={StyleStepper.plus} onPress={pressHandlerPlus}>
        <Text>{uiConstants.plus}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Stepper;
