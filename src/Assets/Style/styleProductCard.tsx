import { StyleSheet,Dimensions } from "react-native";
import color from "../colors";
const width = Dimensions.get('screen').width / 2 - 30;



const ProductCardStyles = StyleSheet.create({
    ViewDesign: {
      height: 100,
      alignment: 'center'
    },
    Cards: {
      height: 225,
      width,
      backgroundColor: color.white,
      borderRadius: 10,
      marginBottom: 10,
      left: 14,
      marginTop: 10,
      padding: 15,
  
    },
    Name: {
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    MainImageDesign: {
      resizeMode: 'stretch',
      height: 115,
      width: 120,
      borderRadius: 10,
      shadowRadius: 100,
    },
    IconCartDesign: {
      top:105,
      right:50,
      backgroundColor: 'white',
      borderRadius: 18
    },
    rating: {
      position: 'relative',
      right: 30,
      marginTop:-18
    },
    Price: {
      position: 'relative',
      left: 100,
      marginTop:8
    }
  });
  export default ProductCardStyles;
  