import { View, Image,TouchableOpacity,Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import {NeuBuyLogo, CartImage} from "../Assets/Images"
import styleCommonTopBar from '../Assets/Style/styleCommonTopBar'
import { uiConstants } from '../Assets/uiConstants'
import {useSelector} from 'react-redux';
import { StateType } from '../Screen/Home/HomeScreen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CommonTopBar = ({style,navigation,display,Header}) => {
    const cart = useSelector((state:StateType)=>state.cart)
    const [cartItemPresent,setCartItemPresent] = useState(false)
    useEffect(() => {
        if (cart.length>0){
            setCartItemPresent(true)
        }
        else{
            setCartItemPresent(false)
        }
      }, [cart]);
    
    const pressHandler = () => {
        navigation.navigate(uiConstants.myCartPage);
      };
    return (
        <View style={[styleCommonTopBar.container,style]}>
            <View style={style}>
                <Image style={styleCommonTopBar.logo} source={NeuBuyLogo} />
            </View>
            <TouchableOpacity style={styleCommonTopBar.backButton}>
            <FontAwesome5 name={"chevron-left"} size={15} onPress={()=>navigation.goBack()}/>
            </TouchableOpacity>
            <View style={display?styleCommonTopBar.headerContainer1:styleCommonTopBar.headerContainer2}>           
                <Text  style={styleCommonTopBar.headerText}>{Header}</Text>
            </View>
            {display?
            <View style={styleCommonTopBar.iconContainer}>
            <TouchableOpacity onPress={pressHandler}>
            <Image style={styleCommonTopBar.carticon} source={CartImage} />
             </TouchableOpacity>
             {
                 cartItemPresent?<View style={styleCommonTopBar.cartValue}><Text style={styleCommonTopBar.cartValueText} >{cart.length}</Text></View> :<Text></Text>
             }
             
             </View>
             :<View></View>}
             
        </View >
    )
}
export default CommonTopBar