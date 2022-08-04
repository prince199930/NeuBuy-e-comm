import React, {useState} from 'react';
import {NeuBuyLogoSU} from '../../Assets/Images';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PrimaryButtonComponent from '../../Components/PrimaryButtonComponent';
import TextInputEntry from '../../Components/TextInputEntry';
import {StyleLogin} from '../../Assets/Style/styleLogin';
import {uiConstants} from '../../Assets/uiConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {regexConstants} from '../../Assets/regexConstants';
import {ScrollView} from 'react-native-gesture-handler';
import {CacheKeyConstants} from '../../Assets/CacheKeyConstants';
import {StyleSignUp} from '../../Assets/Style/styleSignUp'
const Login = ({navigation}) => {
  
  const [emailAlerts, setEmailAlert] = useState<string>(
    uiConstants.emptyString,
  );
  const [passwordAlerts, setPasswordAlert] = useState<string>(
    uiConstants.emptyString,
  );

  let errorEmailComponent = (
    <Text style={StyleSignUp.errorText}>{emailAlerts}</Text>
  );
  let errorPasswordComponent = (
    <Text style={StyleSignUp.errorText}>{passwordAlerts}</Text>
  );

  const [isEmailError, setIsEmailError] = useState<Boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<Boolean>(false);

  let emailAddressPlaceholder = uiConstants.emailAddress;
  let passwordPlaceholder = uiConstants.password;

  let textEntry = true;

  const [email, setEmail] = useState<string>(uiConstants.emptyString);
  const [password, setPassword] = useState<string>(uiConstants.emptyString);

  const userEmailChange = (newUserEmail: string) => {
    setEmail(newUserEmail);
    setEmailAlert(uiConstants.emptyString);
  };
  const userPasswordChange = (newUserPassword: string) => {
    setPassword(newUserPassword);
    setPasswordAlert(uiConstants.emptyString);
  };

  const vaildateLogin = async () => {
    let errorCount: number = 0;
    const regexEmail = regexConstants.regexEmail;
    const regexPassword = regexConstants.regexPassword;

    if (email.length == 0) {
      errorCount++;
      setEmailAlert(uiConstants.emailAlert);
      setIsEmailError(true);
    } else if (!regexEmail.test(email)) {
      errorCount++;
      setEmailAlert(uiConstants.invalidEmailAlert);
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
    if (password.length === 0) {
      errorCount++;
      setPasswordAlert(uiConstants.passwordAlert);
      setIsPasswordError(true);
    } else if (!regexPassword.test(password)) {
      errorCount++;
      setPasswordAlert(uiConstants.invalidPasswordAlert);
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
    if (errorCount === 0) {
      try {
        const value = JSON.parse(
          await AsyncStorage.getItem(CacheKeyConstants.userKey),
        );
        if (value != null) {
          let count: number = 0;
          for (let each of value) {
            if (each.email == email && each.password == password) {
              let currentData = {
                email: email,
                username: each.username,
                password: password,
              };
              AsyncStorage.setItem(
                CacheKeyConstants.currentuserKey,
                JSON.stringify(currentData),
              );
              navigation.navigate(uiConstants.landingPage);
              break;
            } else {
              count++;
            }
          }

          if (count === value.length) {
            Alert.alert(uiConstants.neuBuyText, uiConstants.invalidCrdential);
          }
        } else {
          Alert.alert(uiConstants.neuBuyText, uiConstants.invalidCrdential);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <ScrollView
      style={StyleLogin.container}
      showsVerticalScrollIndicator={false}>
      <View style={StyleLogin.imageContainer}>
        <ImageBackground style={StyleLogin.image} source={NeuBuyLogoSU} />
      </View>
      <View style={StyleLogin.contentContainer}>
        <View style={StyleLogin.textContainer}>
          <Text style={StyleLogin.header}>
          {' '}
          {uiConstants.helloAgain} !{uiConstants.newLine} {uiConstants.welcome}{' '}
          {uiConstants.newLine} {uiConstants.back}{' '}
          </Text>
        </View>
        <View>
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
              errorUserNameComponent={errorPasswordComponent}
              secureTextEntry={textEntry}
              value={password}
            />
        </View>
        <View style={StyleLogin.logInButtonContainer}>
            <PrimaryButtonComponent
              onPress={vaildateLogin}
              text={uiConstants.login}
            />
        </View>
        <View style={StyleLogin.forgotPasswordTextContainer}>
            <TouchableOpacity>
              <Text style={StyleLogin.text}>
                {uiConstants.forgotYourPassword}
              </Text>
            </TouchableOpacity>
        </View>
      </View>  
    </ScrollView>
  );
};
export default Login;
