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

import {useSelector, useDispatch} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import {Actions} from 'react-native-router-flux';
import {IconAsset, Strings, UiColor} from '../../theme';
import {h, w} from '../../utils/Dimensions';
import styles from './styles';
//import {Pages} from 'react-native-pages';
import {connect} from 'react-redux';
import {LoginAPI} from './../../actions/Login';
//import {forgetPasswordApi} from './../../actions/forgetPassword';
//import {SocialLoginApi} from './../../actions/SocialLogin';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from '../../component/Drawer/Styles';



let checkedServerStatus = true;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ForgetScreen = ({navigation}) => {
  const screenStatus = navigation.isFocused();
  const [email, setEmail] = useState(''); 
  
  // Return Ui For Login Page
  return (
    <TouchableWithoutFeedback
      onPress={() => {Keyboard.dismiss();}}>
      <View
        style={styles.mainContainerBox}>
        <View flex= {1}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.txt}>
            Forget Password!
          </Text>
        </View>

        <View flex={2}>
         
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
             
          <TouchableOpacity 
          onPress={Actions.OtpScreen} 
          style={styles.buttonContainer}>
            <Text style={styles.AndText}>SEND OTP</Text>
          </TouchableOpacity>
         
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ForgetScreen;