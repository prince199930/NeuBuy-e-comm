import { View, Text, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import StyleProductDetails from '../../../Assets/Style/StyleProductDetails';
import {Rating} from 'react-native-ratings';
import {uiConstants} from '../../../Assets/uiConstants';
import color from '../../../Assets/colors';
import {addProducts} from '../../../state/action-creators/actionCreators';
import {useDispatch} from 'react-redux';
import CommonTopBar from '../../../Components/CommonTopBar';

const ProductDetailsPage = ({route, navigation}) => {
  const {description, image, price, rating, title} = route.params;
  const [buttonPressed, setButtonPress] = useState(false);
  const dispatch = useDispatch();
  const [titleAddToCartButton, setTitleAddToCartButton] = useState(
    uiConstants.addToCart,
  );

  const pressHandlerAddToCart = product => {
    if (titleAddToCartButton === uiConstants.addToCart) {
      setButtonPress(true);
      const prod = {...product, quantity: 1};
      const myData = dispatch(addProducts(prod));
      ToastAndroid.show(uiConstants.toastAddToCart, ToastAndroid.LONG);
    } else {
      ToastAndroid.show(uiConstants.toastAddedToCart, ToastAndroid.LONG);
    }
    setTitleAddToCartButton(uiConstants.addedToCart);
  };
  return (
    <>
      <CommonTopBar
        style={StyleProductDetails.bgcolor}
        navigation={navigation}
        display={true} Header={undefined}      />
      <ScrollView style={StyleProductDetails.container}>
        <View style={StyleProductDetails.imageContainer}>
          <Image
            source={{ uri: image }}
            style={StyleProductDetails.productImage}
          />
        </View>
        <View style={StyleProductDetails.productDetailsContainer}>
          <Text style={StyleProductDetails.title}>{title.toUpperCase()}</Text>
          <Text style={StyleProductDetails.description}>{description}</Text>
          <View style={StyleProductDetails.row1}>
            <View style={StyleProductDetails.priceAndRatingBox}>
              <Text style={StyleProductDetails.ratingText}>
                {uiConstants.rating}
              </Text>
              <View style={StyleProductDetails.rating}>
                <Rating
                  type={uiConstants.custom}
                  readonly={true}
                  ratingCount={5}
                  imageSize={32}
                  startingValue={rating.rate}
                  ratingBackgroundColor={color.lightSilver}
                  tintColor={color.lotion}
                  ratingColor={color.etonBlue}
                />
              </View>
            </View>
          </View>
          <View style={StyleProductDetails.row2}>
            <View style={StyleProductDetails.priceBox}>
              <View style={StyleProductDetails.priceTextContainer}>
              <Text style={StyleProductDetails.priceText}>{uiConstants.priceText}</Text>
              </View>
              <Text style={StyleProductDetails.price}>
                {uiConstants.rupeeSign}
                {price}
              </Text>
            </View>
            <View style={StyleProductDetails.button}>
              <TouchableOpacity
                style={[
                  StyleProductDetails.buttonContainer,
                  StyleProductDetails.buyNow,
                ]}>
                <Text style={StyleProductDetails.buyNowText}>
                  {uiConstants.buyNow}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => pressHandlerAddToCart(route.params)}
                style={[
                  StyleProductDetails.cartButton,
                  buttonPressed
                    ? StyleProductDetails.addedToCart
                    : StyleProductDetails.addToCart,
                ]}>
                <Text style={StyleProductDetails.addToCartText}>
                  {titleAddToCartButton}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetailsPage;