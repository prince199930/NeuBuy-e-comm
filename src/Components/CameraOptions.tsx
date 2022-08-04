import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import cameraOptions from '../Assets/Style/styleCameraComponent';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {uiConstants} from '../Assets/uiConstants';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { CacheKeyConstants } from '../Assets/CacheKeyConstants';

const CameraOptions = ({
  active,
  setActive,
  setCameraImage,
  cameraImage,
  username,
}) => {
  const imageSelect = () => {
    ImagePicker.openPicker({
      width: 50,
      height: 50,
      cropping: true,
    }).then(image => {
      setCameraImage(image.path);
      setActive(false);
    });
  };
  const cameraSelect = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setCameraImage(image.path);
      setActive(false);
    });
  };
  const cancel=()=>{
    setActive(false)
  }
  useEffect(() => {
    saveImage();
  }, [cameraImage]);
  const saveImage = async () => {
    let ImageSelected = {
      cameraImage: cameraImage,
    };
    try {
      await AsyncStorage.setItem(CacheKeyConstants.avatarKey, JSON.stringify(ImageSelected));
      const value = JSON.parse(await AsyncStorage.getItem(CacheKeyConstants.userKey));

      let newArray = [];
      for (let item of value) {
        if (item.username === username) {
          item.imagelink = cameraImage;
          let addImageLink = newArray.concat([item]);
          newArray = addImageLink;
        } else {
          let linkNotAdded = newArray.concat([item]);
          newArray = linkNotAdded;
        }
      }
      await AsyncStorage.setItem(CacheKeyConstants.userKey, JSON.stringify(newArray));
    } catch (error) { }
  };

  return (
    
    <View style={cameraOptions.container} >
      {active == true ? (
        <View style={cameraOptions.header}>
          <BottomSheet >
          <View >
            <Text style={cameraOptions.panelSubtitle}>
              {uiConstants.popUpHeaderText}
            </Text>
          </View>
          <TouchableOpacity
            onPress={cameraSelect}
            style={cameraOptions.panelButton}>
            <Text style={cameraOptions.panelButtonTitle}>
              {uiConstants.cameraText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={imageSelect}
            style={cameraOptions.panelButton}>
            <Text style={cameraOptions.panelButtonTitle}>
              {uiConstants.gallaryText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={cancel}
            style={cameraOptions.panelButton}>
            <Text style={cameraOptions.panelButtonTitle}>
              {uiConstants.cancelText}
            </Text>
          </TouchableOpacity>
          
          </BottomSheet>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default CameraOptions;