import React, { useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FavoriteScreen from './Product/FavoriteScreen';
import {uiConstants} from '../../Assets/uiConstants';
import {color} from '../../Assets/colors';
import HomeNestedScreens from '../HomeNestedScreens';
import ProfileNestedScreens from '../ProfileNestedScreen';
import { useNavigation } from '@react-navigation/native';
const LandingPage = () => {
  const BottomTab = createMaterialBottomTabNavigator();
  const navigation = useNavigation()
  useEffect(
    ()=>
    navigation.addListener("beforeRemove",event=>{
      event.preventDefault();
    }),
    [navigation]
  )
  return (
    <>
      <BottomTab.Navigator
        initialRouteName={uiConstants.homeNestedScreens}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }: any) => {
            let iconName: string;
            if (route.name === uiConstants.homeNestedScreens) {
              iconName = uiConstants.home;
              size = focused ? 22 : 20;
            } else if (route.name === uiConstants.profileNestedScreens) {
              iconName = uiConstants.user;
              size = focused ? 22 : 20;
            } else if (route.name === uiConstants.favoriteScreenName) {
              iconName = uiConstants.heart;
              size = focused ? 22 : 20;
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        activeColor={color.darkSeaGreen}
        inactiveColor={color.spanishGray}
        labeled={false}
        barStyle={{backgroundColor: color.black}}>
           <BottomTab.Screen
          name={uiConstants.homeNestedScreens}
          component={HomeNestedScreens}
        />
        <BottomTab.Screen
          name={uiConstants.favoriteScreenName}
          component={FavoriteScreen}
        />
       
        <BottomTab.Screen
          name={uiConstants.profileNestedScreens}
          component={ProfileNestedScreens}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default LandingPage;
