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

class AdminHome extends React.Component {

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
                { text: 'OK', onPress: () => Actions.MainHome() },
            ],
            { cancelable: false },
        );
        return true;
    };

    componentWillUnmount() {
        this.backHandler.remove();
    }
    adminLogin = () => {
        Actions.Login()
        console.log('login')
    }
    staffLogin = () => {
        Actions.Login()
        console.log('login')
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer}>
                <Loader loading={this.state.isLoading} />
                <StatusBar />
                
                    <View>
                        <Image resizeMode='contain'
                            style={{ height: h(10), width: h(20),resizeMode: 'stretch' }}
                            source={require('../../assets/icon/dummylogo.png')}
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
