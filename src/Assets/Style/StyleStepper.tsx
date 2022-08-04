import {StyleSheet} from 'react-native';
import color from '../colors';

const StyleStepper = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: color.raisinBlack,
    borderRadius: 5,
    width: 81,
    height: 27,
    backgroundColor: color.white,
  },
  minus: {
    width: 27,
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    borderColor: color.raisinBlack,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    width: 27,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
  },
  minusText:{
    marginTop:-3.5
  }
});

export default StyleStepper;
