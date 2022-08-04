import {StyleSheet,Dimensions } from 'react-native';
import {color} from '../colors';

const { width, height } = Dimensions.get('window');
export const StyleSignUp = StyleSheet.create({
  container: { 
    flex: 1,
  },
  imageContainer: {
  position:"absolute",
  marginTop:"30%"
  },
  image:{
    height: height,
    width: width,
    opacity:0.5
  },
  contentContainer:{
    height: height,
    width: width,
    alignItems:"center",
  },
  textContainer:{
   marginTop:"30%",
   marginBottom:"10%",
   marginLeft:"-5%"
  },
  header: {
    fontSize: 30,
    color: color.chineseBlack,
  },
  signUpButtonContainer:{
     marginTop:"-3%"
  },
  alreadyMemberTextContainer:{
   marginTop:"5%"
  },
  text: {
    fontSize: 12,
    color: color.black,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: color.red,
    padding: 5,
    fontSize: 12,
    marginBottom: 5,
    marginTop: -5,
    textAlign:"left"
  },
  
});
