import {StyleSheet} from 'react-native';
import {color} from '../colors';
export const StyleWelcome = StyleSheet.create({
  image: {
    width: 250,
    height: 1000,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 75,
  },
  Final: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  colour: {
    color: color.white,
    textDecorationLine: 'underline',
  },
  letter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bg: {
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 47,
    paddingRight: 47,
    borderRadius: 10,
    backgroundColor: color.etonBlue,
    fontSize: 16,
    height: 45,
    width: 180,
    color: color.eerieBlack,
  },
  simage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 250,
  },

  container: {
    flex: 1,
    backgroundColor: color.black,
  },
});
