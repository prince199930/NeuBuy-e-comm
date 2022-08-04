import {TouchableOpacity, View,Image} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {uiConstants} from '../Assets/uiConstants';
import color from '../Assets/colors';
import { styleSearchBar } from '../Assets/Style/styleSearchBar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styleTopBar from '../Assets/Style/styleTopBar';
import { SearchImage } from '../Assets/Images';
const SearchBar = ({value, onChangeText,clearData}) => {
  return (
      <View style={styleSearchBar.container}>
      <Image style={styleSearchBar.searchIcon} source={SearchImage} />
      <TextInput
        
        value={value}
        placeholder={uiConstants.search}
        placeholderTextColor={color.black}
        style={styleSearchBar.search}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        
      />
      {value.length>0?
      <TouchableOpacity style={styleSearchBar.delete} onPress={clearData}>
      <FontAwesome5 name={"times"} size={15} />
      </TouchableOpacity>:<View></View>
      }
    </View>
  );
};

export default SearchBar;
