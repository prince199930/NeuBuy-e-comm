import {StyleSheet} from 'react-native';
import color from '../colors';

const StyleCartItem = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    marginLeft: 19,
    marginRight: 19,
    marginBottom: 10,
    height: 130,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 20
  },
  imageContainer: {
    height: 100,
    width: 100,
    elevation: 20,
    marginRight: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    borderRadius: 25,
  },
  detailsContainer: {
    flexDirection: 'column',
  },
  textContainer: {
    width: 170,
    flexGrow: 1,
    paddingRight: 5,
    height:50
  },
  priceText:{
    marginLeft:"55%"
  },
  cancel:{
    height:40,
    width:40
  },
  cancelPosition:{
    marginLeft:"50%"
  }
});

export default StyleCartItem;
