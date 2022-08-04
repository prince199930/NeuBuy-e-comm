import {StyleSheet} from 'react-native';
import {color} from '../colors';
export const StyleTextInput = StyleSheet.create({
  textinput: {
    color: color.black,
    backgroundColor: color.whiteSmoke,
    height: 45,
    width: 300,
    borderBottomColor: color.argent,
    borderBottomWidth: 2,
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  empty:{
    padding: 5,
    fontSize: 12,
    marginBottom: 5,
    marginTop: -5,
    textAlign:"left"
  }
});
