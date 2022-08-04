import {StyleSheet} from 'react-native';
import color from '../colors';
export const styleAddAddress = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  addAddress: {
    marginLeft: 6,
    fontSize: 40,
    color: color.black,
  },
  addresscontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
    
  },
  imageContainer: {
    height: 50,
    width: 25,
    position: 'relative',
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  dropDownStyle: {
    backgroundColor: color.whiteSmoke,
    height: 45,
    width: 300,
    borderBottomColor: color.argent,
    borderBottomWidth: 2,
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  dropDownTextStyle: {
    color: color.black,
  },
  bgcolor:{
    backgroundColor: color.white,
    marginTop:5
  }
});
