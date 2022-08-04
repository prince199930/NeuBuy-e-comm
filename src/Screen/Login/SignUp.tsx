import React, { useState } from 'react';
import { uiConstants } from '../../Assets/uiConstants';
import { StyleSignUp } from '../../Assets/Style/styleSignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputEntry from '../../Components/TextInputEntry';
import { NeuBuyLogoSU } from '../../Assets/Images';
import PrimaryButtonComponent from '../../Components/PrimaryButtonComponent';
import { LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { regexConstants } from '../../Assets/regexConstants';
import { CacheKeyConstants } from '../../Assets/CacheKeyConstants';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

function SignUp({ navigation }) {
  const [userName, setUserName] = useState<string>(uiConstants.emptyString);
  const [email, setEmail] = useState<string>(uiConstants.emptyString);
  const [password, setPassword] = useState<string>(uiConstants.emptyString);
  const [confirmPassword, setConfirmPassword] = useState<string>(
    uiConstants.emptyString,
  );
  let userNamePlaceholder = uiConstants.name;
  let emailAddressPlaceholder = uiConstants.emailAddress;
  let passwordPlaceholder = uiConstants.password;
  let confirmPasswordPlaceholder = uiConstants.newConfirmPassword;
  let textEntry = true;

  const reset = () => {
    setUserName(uiConstants.emptyString);
    setEmail(uiConstants.emptyString);
    setPassword(uiConstants.emptyString);
    setConfirmPassword(uiConstants.emptyString);
  };
  const [isUserError, setIsUserError] = useState<Boolean>(false);
  const [isEmailError, setIsEmailError] = useState<Boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<Boolean>(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] =
    useState<Boolean>(false);

  const [userNameAlerts, setUserNameAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [emailAlerts, setEmailAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [passwordAlerts, setPasswordAlert] = useState<String>(
    uiConstants.emptyString,
  );
  const [confirmPasswordAlerts, setConfirmPasswordAlert] = useState<String>(
    uiConstants.emptyString,
  );

  let errorUserNameComponent = (
    <Text style={StyleSignUp.errorText}>{userNameAlerts}</Text>
  );
  let errorEmailComponent = (
    <Text style={StyleSignUp.errorText}>{emailAlerts}</Text>
  );
  let errorPasswordComponent = (
    <Text style={StyleSignUp.errorText}>{passwordAlerts}</Text>
  );
  let errorConfirmPasswordComponent = (
    <Text style={StyleSignUp.errorText}>{confirmPasswordAlerts}</Text>
  );

  const userNameChange = newUserName => {
    setUserName(newUserName);
    setUserNameAlert(uiConstants.emptyString);
  };
  const userEmailChange = newUserEmail => {
    setEmail(newUserEmail);
    setEmailAlert(uiConstants.emptyString);
  };
  const userPasswordChange = newUserPassword => {
    setPassword(newUserPassword);
    setPasswordAlert(uiConstants.emptyString);
  };
  const userConfirmPasswordChange = newUserConfirmPassword => {
    setConfirmPassword(newUserConfirmPassword);
    setConfirmPasswordAlert(uiConstants.emptyString);
  };
  const saveData = async () => {
    var userData = {
      username: userName,
      email: email,
      password: password,
      addresses:[],
    };
    const value = JSON.parse(
      await AsyncStorage.getItem(CacheKeyConstants.userKey),
    );
    if (value !== null) {
      let count = 0;
      for (let each of value) {
        if (
          each.email == userData.email &&
          each.username != userData.username
        ) {
          Alert.alert(uiConstants.neuBuy, uiConstants.existingEmailAlert);
          break;
        } else if (
          each.username == userData.username &&
          each.email != userData.email
        ) {
          Alert.alert(uiConstants.neuBuy, uiConstants.existingUsernameAlert);
          break;
        } else if (
          each.email == userData.email &&
          each.username == userData.username
        ) {
          Alert.alert(
            uiConstants.neuBuy,
            uiConstants.existingUsernameAndEmailAlert,
          );
          break;
        } else {
          count++;
        }
      }
      if (count === value.length) {
        const presentvalue = [userData];
        const newValue = value.concat(presentvalue);
        await AsyncStorage.setItem(
          CacheKeyConstants.userKey,
          JSON.stringify(newValue),
        );
        Alert.alert(uiConstants.neuBuy, uiConstants.signUpSuccessfullAlert, [
          {
            text: 'OK',
            onPress: () => login(),
          },
        ]);
      }
    } else {
      const presentvalue = [userData];
      await AsyncStorage.setItem(
        CacheKeyConstants.userKey,
        JSON.stringify(presentvalue),
      );
      Alert.alert(uiConstants.neuBuy, uiConstants.signUpSuccessfullAlert, [
        {
          text: 'OK',
          onPress: () => login(),
        },
      ]);
    }
  };

  const Validate = (): void => {
    let count: number;
    count = 0;
    const regexEmail = regexConstants.regexEmail;
    const regexPassword = regexConstants.regexPassword;
    const regexUsername = regexConstants.regexUsername;
    //UserName Validation Conditions
    if (userName.length > 20 || (userName.length < 8 && userName.length >= 1)) {
      count++;
      setUserNameAlert(uiConstants.userNameAlert);
      setIsUserError(true);
    } else if (userName.length === 0) {
      count++;
      setUserNameAlert(uiConstants.newUserNameAlert);
      setIsUserError(true);
    } else if (!regexUsername.test(userName)) {
      count++;
      setUserNameAlert(uiConstants.invalidUserNameAlert);
      setIsUserError(true);
    } else {
      setIsUserError(false);
    }

    //Email Validation Conditions
    if (email.length == 0) {
      count++;
      setEmailAlert(uiConstants.emailAlert);
      setIsEmailError(true);
    } else if (!regexEmail.test(email)) {
      count++;
      setEmailAlert(uiConstants.invalidEmailAlert);
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
    //Password Validation Conditions
    if (password.length === 0) {
      count++;
      setPasswordAlert(uiConstants.passwordAlert);
      setIsPasswordError(true);
    } else if (!regexPassword.test(password)) {
      count++;
      setPasswordAlert(uiConstants.invalidPasswordAlert);
      setIsPasswordError(true);
    } else {
      if (confirmPassword.length === 0) {
        count++;
        setConfirmPasswordAlert(uiConstants.confirmPasswordAlert);
        setIsConfirmPasswordError(true);
      } else if (password !== confirmPassword) {
        count++;
        setConfirmPasswordAlert(uiConstants.invalidConfirmpPsswordAlert);
        setIsConfirmPasswordError(true);
      } else {
        setIsConfirmPasswordError(false);
      }
    }
    //SignUp successful
    if (count === 0) {
      saveData();
    }
  };
  const login = (): void => {
    reset();
    navigation.navigate(uiConstants.loginPage);
  };

  return (
    <ScrollView
      style={StyleSignUp.container}
      showsVerticalScrollIndicator={false}>
      <View style={StyleSignUp.imageContainer}>
        <ImageBackground style={StyleSignUp.image} source={NeuBuyLogoSU} />
      </View>
      <View style={StyleSignUp.contentContainer}>
        <View style={StyleSignUp.textContainer}>
          <Text style={StyleSignUp.header}>
            {uiConstants.wel}
            {uiConstants.newLine}
            {uiConstants.signupToGetStarted}
          </Text>
        </View>
        <View>
          <TextInputEntry
            onChangeText={userNameChange}
            placeholder={userNamePlaceholder}
            isError={isUserError}
            errorUserNameComponent={errorUserNameComponent}
            value={userName}
          />
          <TextInputEntry
            onChangeText={userEmailChange}
            placeholder={emailAddressPlaceholder}
            isError={isEmailError}
            errorUserNameComponent={errorEmailComponent}
            value={email}
          />
          <TextInputEntry
            onChangeText={userPasswordChange}
            placeholder={passwordPlaceholder}
            isError={isPasswordError}
            secureTextEntry={textEntry}
            errorUserNameComponent={errorPasswordComponent}
            value={password}
          />
          <TextInputEntry
            onChangeText={userConfirmPasswordChange}
            placeholder={confirmPasswordPlaceholder}
            isError={isConfirmPasswordError}
            secureTextEntry={textEntry}
            errorUserNameComponent={errorConfirmPasswordComponent}
            value={confirmPassword}
          />
        </View>
        <View style={StyleSignUp.signUpButtonContainer}>
          <PrimaryButtonComponent
            onPress={Validate}
            text={uiConstants.signup}
          />
        </View>
        <View style={StyleSignUp.alreadyMemberTextContainer}>
          <TouchableOpacity onPress={login}>
            <Text style={StyleSignUp.text}>
              {uiConstants.alreadyAMemberLogin}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
export default SignUp;



[{ "addresses": [[Object], [Object]], "email": "Ayush@gmail.com", "imagelink": "file:///storage/emulated/0/Android/data/com.neubuy/files/Pictures/ddab2e44-1bf1-472f-bc33-c17fcabaef38.jpg", "password": "Ayush@12345", "username": "Ayush_123" }, { "addresses": [[Object]], "email": "MaiHu@gmail.com", "password": "Maihu@12345", "username": "MaiHuDon" }, { "addresses": [[Object]], "email": "Rohit@gmail.com", "password": "Rohit@12345", "username": "Rohit Kumar" }, { "addresses": [], "email": "Sahil@gmail.com", "password": "Sahil@12345", "username": "Sahil Jaryal" }, { "email": "Parth@gmail.com", "password": "Parth@12345", "username": "Parth Rawat" }]