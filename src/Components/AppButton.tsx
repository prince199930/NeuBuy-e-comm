import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import profilePageStyle from '../Assets/Style/styleProfilePage';
const AppButton = props => {
  const {onPress, label} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={profilePageStyle.buttonContainer}>
      <Text style={profilePageStyle.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;
