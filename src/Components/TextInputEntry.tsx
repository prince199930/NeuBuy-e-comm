import React from 'react';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

import { Text, TextInput } from 'react-native';
import { StyleTextInput } from '../Assets/Style/styleTextInput';
import { uiConstants } from '../Assets/uiConstants';

function TextInputEntry(props) {
  const {
    placeholder,
    onChangeText,
    isError,
    errorUserNameComponent,
    secureTextEntry,
    value
  } = props;
  return (
    <>
      <TextInput
        style={StyleTextInput.textinput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
      />
      {(isError && errorUserNameComponent) || (
        <Text style={StyleTextInput.empty}>{uiConstants.emptyString}</Text>
      )}
    </>
  );
}

export default TextInputEntry;
