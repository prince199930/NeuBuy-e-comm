import {StyleSheet} from 'react-native';
import {color} from '../colors';
export const buttonStyles = StyleSheet.create({
  genericbtnstyle: {
    alignSelf:'center',
    width:'40%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 0,
    backgroundColor: color.black,
    shadowColor: color.black,
    shadowOpacity: 0.9,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 3},
    padding: 15,
  },
  btnstyle: {
    color: color.white,
    fontSize: 15,
    width: 100,
    height: 20,
    textAlign: 'center',
  },
});
