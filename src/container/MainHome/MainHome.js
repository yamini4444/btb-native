import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { loginAPI } from "../../../actions/Login";
import styles from './styles';
import { w, h } from '../../utils/Dimensions';
import { TextSize } from '../../theme/TextSize';
import Loader from '../../constants/Loader';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import menuIcon from '../../assets/icon/icon-menu.png';

class MainHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userName: '',
      password: '',
      passwordShow: true,
      deviceToken: ''
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    Alert.alert(
      'Novus',
      'Are you sure you want to exit from App?',
      [
        { text: 'cancel', onPress: () => console.log('Cancel Pressed') },
        { text: 'OK', onPress: () => Actions.Login() },
      ],
      { cancelable: false },
    );
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }
  adminLogin = () => {
    Actions.AdminHome()
    console.log('login')
  }
  staffLogin = () => {
    Actions.StaffLogin()
    console.log('login')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.mainContainer}>
        <Loader loading={this.state.isLoading} />
        <StatusBar />
        <View>
          <TouchableOpacity
            style={styles.menuIconView}
            onPress={() => Actions.drawerOpen()}>
            <Image
              resizeMode="contain"
              style={styles.menuIconStyle}
              source={menuIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.logoStyle}>
            <Image resizeMode='contain'
              style={{ height: h(5), width: h(15), marginTop: h(5), resizeMode: 'stretch' }}
              source={require('../../assets/icon/dummylogo.png')}
            />
          </View>

          <View>
            <Image
              style={{ height: h(40), width: h(70), marginTop: h(5), resizeMode: 'stretch' }}
              source={require('../../assets/image/desktopimage.jpg')}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: h(10),
              marginLeft: h(3)

            }}>
            <View style={styles.logoStyle}>
              <TouchableOpacity
                onPress={() => this.adminLogin()}
              >
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icon/dummylogo.png')}
                />
                <Text
                  style={styles.appName}>
                  Admin Home
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.logoStyle}>
              <TouchableOpacity
                onPress={() => this.staffLogin()}
              >
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icon/dummylogo.png')}
                />
                <Text
                  style={styles.appName}>

                  Staff Login
                </Text>
              </TouchableOpacity>


            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
};

// Login.propTypes = {
//   ///  submitForm: PropTypes.func,
//   /// login: PropTypes.any
// }

const mapStateToProps = (state) => {
  return {
    ///  login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ///submitForm: (data) => dispatch(loginAPI(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHome);
