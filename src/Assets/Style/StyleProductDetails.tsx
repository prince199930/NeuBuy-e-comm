import {StyleSheet} from 'react-native';
import {color} from '../colors';
import {uiConstants} from '../uiConstants';

const StyleProductDetails = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  imageContainer: {
    height: 500,
  },
  productImage: {
    height: uiConstants.hundredpercent,
    width: uiConstants.hundredpercent,
    resizeMode: 'stretch',
  },
  productDetailsContainer: {
    padding: 25,
    backgroundColor: color.lotion,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    color: color.graniteGray,
    fontSize: 16,
    marginBottom: 23,
  },
  description: {
    marginBottom: 23,
    color: color.darkSilver,
    textAlign: 'left',
    fontSize: 12,
  },
  row1: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent:"space-between"
  },
  priceAndRatingBox: {
    width: 109,
    height: 62,
  },
  ratingText: {
    color: color.graniteGray,
    fontSize: 16,
    marginBottom: 12,
    width: 83,
    height: 20,
  },
  priceText:{
    color: color.graniteGray,
    fontSize: 16,
    marginBottom: 12,
    width: 83,
    height: 20,
    marginTop:-5
  },
  rating: {
    marginRight: -40,
  },
  priceAndButtonBox: {
    flexDirection: 'row',
   
  },
  priceBox: {
    height: 60,
    padding: 9,
    marginTop:-20,
    marginLeft:-10,
  },
  price: {
    width: 52,
    height: 20,
    color: color.dimGray,
    fontSize: 16,
    marginTop:-20,
    marginLeft:5
  },
  priceTextContainer:{
    marginTop:5,
    marginBottom:20
  },
  button: {
    flexDirection: 'row',
  },
  cartIconPosition: {
    position: 'absolute',
    marginLeft: '87.5%',
    marginTop: 15,
  },
  icon: {
    height: 20,
    width: 28,
    resizeMode: 'stretch',
  },
  cartValue: {
    position: 'absolute',
    marginLeft: '93%',
    marginRight: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    height: 20,
    width:18,
    borderRadius: 18,
    backgroundColor: color.etonBlue,
  },
  cartValueText: {
    color: color.white,
  },
  buttonContainer: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyNow: {
    backgroundColor: color.raisinBlack,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  addToCart: {
    backgroundColor: color.etonBlue,
  },
  addedToCart: {
    borderStyle: uiConstants.solid,
    borderWidth: 1,
    borderColor: color.lightSilver,
    backgroundColor: color.lotion,
  },
  buyNowText: {
    color: color.cultured,
  },
  addToCartText: {
    color: color.chineseBlack,
  },
  cartButton: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  bgcolor:{
    backgroundColor: color.white
  },
  row2:{
    justifyContent: 'space-between',
     flexDirection: 'row'
    }
});

export default StyleProductDetails;