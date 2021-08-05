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
import {connect} from 'react-redux';
import {LoginAPI} from './../../actions/Login';
import OtpInputs from 'react-native-otp-inputs';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from '../../component/Drawer/Styles';



let checkedServerStatus = true;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const OtpScreen = ({navigation}) => {
  const screenStatus = navigation.isFocused();
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState('');
  

 
  
  // Return Ui For Login Page
  return (
    <TouchableWithoutFeedback
      onPress={() => {Keyboard.dismiss();}}>
      <View
        style={styles.mainContainerBox}>
        <View flex= {1}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.txt}>
            Enter OTP!
          </Text>
        </View>

        <View flex={2}>
         
        <View style={{ flexDirection: 'row', paddingLeft: w(10), paddingRight: w(10) }}>
                        <OtpInputs
                            numberOfInputs={4}
                            handleChange={(otp) => setOtp(otp)}
                            inputStyles={styles.otpInput}
                        />
                    </View>
             
          <TouchableOpacity 
          onPress={Actions.Login} 
          style={styles.buttonContainer}>
            <Text style={styles.AndText}>CHANGE PASSWORD</Text>
          </TouchableOpacity>
         
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  );
};
export default OtpScreen;