import React, {useState, useEffect,createRef} from 'react';
import {
  View,
  Image,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  BackHandler,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import ConfirmGoogleCaptcha from 'react-native-google-recaptcha-v2';
import {useSelector, useDispatch} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import {Actions} from 'react-native-router-flux';
import {IconAsset, Strings, UiColor} from '../../theme';
import {h, w} from '../../utils/Dimensions';
import styles from './styles';
import {connect} from 'react-redux';
import {LoginAPI} from './../../actions/Login';
import AsyncStorage from '@react-native-community/async-storage';

let captchaForm = createRef();

let checkedServerStatus = true;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SignUp = ({navigation}) => {
  const screenStatus = navigation.isFocused();

  const [Show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showButton, setshowButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [filldata, setFillData] = useState(false);
  const userInfo = {};
  const white = require(`../../assets/icon/eye.png`);
  const black = require(`../../assets/icon/password-hide.png`);

  useEffect(() => {
    setFillData(false);
  }, []);
  
  
  const colorChange = async () => {
    setshowButton(!showButton);
    
  };

  const onMessage = event => {
    console.log('event', event);
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        captchaForm.hide();
        return;
      } else {
        console.log('Verified code from Google', event.nativeEvent.data);
        setTimeout(() => {
          captchaForm.hide();
          setFillData(true);
          // do what ever you want here
        }, 1500);
      }
    }
  };

  // Return Ui For Login Page
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={styles.mainContainerBox}>
        <View style={{flex: 0.6}}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.txt}>
            Sign Up BTB!
          </Text>
        </View>

        <View flex={1.43}>
         
            <TextInput
              style={styles.inputFieldContainer}
              placeholderTextColor="#383B3F"
              underlineColorAndroid="transparent"
              placeholder="Enter First Name"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
                
            <TextInput
             style={styles.inputFieldContainer}
              placeholderTextColor="#383B3F"
              underlineColorAndroid="transparent"
              placeholder="Enter Last Name"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
                  
            <TextInput
              style={styles.inputFieldContainer}
              placeholderTextColor="#383B3F"
              underlineColorAndroid="transparent"
              placeholder="Enter Email"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
            
            <TextInput
              style={styles.inputFieldContainer}
              placeholderTextColor="#383B3F"
              underlineColorAndroid="transparent"
              placeholder="Enter Date Of Birth"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
            
          <View
            style={styles.passwordBox}>
            <TextInput
              style={styles.inputFieldContainer2}
              placeholderTextColor="#383B3F"
              underlineColorAndroid="transparent"
              placeholder="Enter password"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              secureTextEntry={!showPassword}
              onChangeText={(password) => setPassword(password)}
              value={password}
            />

            <TouchableOpacity
               style={styles.touchPassword}
              // onPress={PasswordVisibility}
              onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? (
                <Image
                  source={require('../../assets/icon/password-hide.png')}
                  style={styles.EyeImage}
                />
              ) : (
                <Image
                  source={require('../../assets/icon/eye.png')}
                  style={styles.EyeImage}
                />
              )}
            </TouchableOpacity>
          </View>

         
          <TouchableOpacity 
           onPress={() => captchaForm.show()}
          //onPress={doLogin} 
          style={styles.buttonContainer}>
            <Text style={styles.AndText}>SIGN UP</Text>
          </TouchableOpacity>
          <ConfirmGoogleCaptcha
          // eslint-disable-next-line no-undef
          ref={(_ref: {show: () => void} | null) => (captchaForm = _ref)}
          // siteKey={'6LfH7nIaAAAAAEgbcYkQz0wbmUFHs2R79lRj0EsC'}
          siteKey={'6LeDXPEaAAAAAOEOSDo-4lkVHU3TV5e3tf-5AhCe'}
          baseUrl={'http://3.140.234.233/pitch/apiV1'}
          languageCode="en"
          onMessage={onMessage}
        />
         
        </View>
        <View style={{flex: 0.6}}>
          <View
            style={styles.socialLogin}>
            <TouchableOpacity
              //onPress={fbLogin}
              style={styles.fbView}>
              <Image
                style={styles.innerTxt}
                source={require('../../assets/icon/Facebook-glass.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              //onPress={googleLogin}
              style={styles.gmailView}>
              <Image
                style={styles.innerTxt}
                source={require('../../assets/icon/google-glass-logo.png')}
              />
            </TouchableOpacity>
    
          </View>

          <TouchableOpacity
            onPress={Actions.Login}>
            
            <Text
              style={styles.signUpView}>
              Login
            </Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SignUp;