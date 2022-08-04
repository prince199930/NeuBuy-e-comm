import {StyleSheet} from 'react-native';
import {color} from '../colors';
export const CartStyle = StyleSheet.create({
  CartContainer: {
    flexDirection: 'row',
  },
  cart: {
    height: 130,
    width: '90%',
    backgroundColor: color.white,
    marginHorizontal: 20,
    borderRadius: 15,
    marginLeft: 20,
    marginTop: 50,
    padding: 15,
    elevation: 5,
  },
  logo: {
    height: 50,
    width: 30,
    marginHorizontal: 15,
    marginTop: 30,
  },
  TextDesign: {
    top: 10,
    fontSize: 25,
    marginHorizontal: 15,
  },
  textBox: {marginBottom: 15},
  text: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 17,
    fontWeight:'bold'
  },
  Image: {
    resizeMode: 'stretch',
    height: 90,
    width: 150,
    borderRadius: 15,
    padding: 15,
  },
  Text: {
    fontSize: 16,
    left: 150,
    bottom: 92,
  },
  price: {
    fontSize: 16,
    bottom: 120,
    left: 280,
  },
  step: {
    bottom: 90,
    left: 150,
  },

  checkoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: color.etonBlue,
    height: 35,
    width: 150,
    marginHorizontal: 120,
    marginVertical: 70,
  },
  list: {
    height: '70%',
    width: 'auto',
    marginBottom:-50
  },
  bgcolor:{
    backgroundColor: color.cultured,
  },
  cartEmptyText:{
    alignSelf:'center',
    justifyContent:'center',
    marginTop: -130,
    fontSize:30
  }
});
