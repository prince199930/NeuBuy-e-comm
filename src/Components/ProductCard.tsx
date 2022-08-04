import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {color} from '../Assets/colors';
import ProductCardStyles from '../Assets/Style/styleProductCard';
import {useDispatch} from 'react-redux';
import {addProducts} from '../state/action-creators/actionCreators';
import {ProductType} from '../Assets/Types/Product';
import {uiConstants} from '../Assets/uiConstants';
interface IProps {
  item: ProductType;
  navigation: any;
}

const ProductCard: React.FC<IProps> = ({item, navigation}) => {
  const dispatch = useDispatch();
  const pressHandler = () => {
    navigation.navigate(uiConstants.productDetailsPage, item);
  };
  const pressHandlerAddToCart = product => {
    const prod = {...product, quantity: 1};
    dispatch(addProducts(prod));
  };
  return (
    <>
      <TouchableOpacity
        style={ProductCardStyles.Cards}
        key={item.id}
        onPress={pressHandler}>
        <View style={ProductCardStyles.ViewDesign}>
          <View style={ProductCardStyles.MainImageDesign}>
            <Image
              source={{uri: `${item.image}`}}
              style={ProductCardStyles.MainImageDesign}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <View>
              <Text numberOfLines={2} style={ProductCardStyles.Name}>
                {' '}
                {item.title}{' '}
              </Text>
            </View>
            <View>
              <Text style={ProductCardStyles.Price}>
                {uiConstants.rupeeSign}
                {item.price}
              </Text>
            </View>
          </View>
          <View style={ProductCardStyles.rating}>
            <Rating
              type={uiConstants.custom}
              readonly={true}
              ratingCount={5}
              imageSize={16}
              startingValue={item.rating.rate}
              ratingBackgroundColor={color.lightSilver}
              tintColor={color.lotion}
              ratingColor={color.etonBlue}
            />
          </View>
        </View>
      </TouchableOpacity>
          <View>
            <TouchableOpacity style={ProductCardStyles.IconCartDesign}>
              <Icon
                onPress={() => pressHandlerAddToCart(item)}
                name="shopping-cart"
                size={30}
                color={color.etonBlue}
              />
            </TouchableOpacity>
          </View>
    </>
  );
};

export default ProductCard;
