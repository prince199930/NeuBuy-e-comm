import {View, Image,Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NeuBuyLogo, SearchImage, CartImage} from '../../Assets/Images';
import styleTopBar from '../../Assets/Style/styleTopBar';
import SearchBar from '../../Components/SearchBar';
import {uiConstants} from '../../Assets/uiConstants';
import {useSelector} from 'react-redux';
import {StateType} from './HomeScreen';

const TopBar = ({ setFinalData, navigation }) => {
  const state = useSelector((state: StateType) => state.product);
  const cart = useSelector((state:StateType)=>state.cart)
  const [isPresent,setIsPresent] = useState(false)
  const [name, setName] = useState<String>('');
  const [image, setImage] = useState(SearchImage);
  const clearData=()=>{
    setName("")
  }
  //Create a function to search the product
  const searchProduct = (): void => {
    setFinalData(
      state.filter(product =>
        product.title.toLowerCase().includes(name.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    searchProduct();
    if (cart.length>0){
      setIsPresent(true)
    }
    else{
      setIsPresent(false)
    }
  }, [name,cart]);

  const pressHandler = () => {
    navigation.navigate(uiConstants.myCartPage);
  };
  return (
    <View style={styleTopBar.container}>
      <View>
        <Image style={styleTopBar.logo} source={NeuBuyLogo} />
      </View>
      <View style={styleTopBar.icons}>
        <SearchBar
          value={name}
          onChangeText={(text: String) => setName(text)}
          clearData={clearData}
        />
        <TouchableOpacity
          onPress={() => {
            searchProduct();
          }}>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressHandler}>
            <Image style={styleTopBar.carticon} source={CartImage} />
        </TouchableOpacity>
        {isPresent?
         <View style={styleTopBar.cartValue}><Text style={styleTopBar.cartValueText} >{cart.length}</Text></View> :<Text></Text>
        }
      </View>
    </View>
  );
};
export default TopBar;