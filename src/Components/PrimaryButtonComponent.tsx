import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonStyles} from '../Assets/Style/stylePrimaryButtonComponent';

const PrimaryButtonComponent = (props) => {
  const { onPress, text } = props;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.genericbtnstyle}>
      <Text style={buttonStyles.btnstyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButtonComponent;