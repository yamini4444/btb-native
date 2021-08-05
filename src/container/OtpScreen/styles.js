import { StyleSheet } from 'react-native';
import { h, w } from '../../utils/Dimensions';

export default StyleSheet.create({
  mainContainerBox:{
    flex: 1,
    backgroundColor: '#fff',
    opacity: 1,
  },
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  txt: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    top: h(13),
    color: '#383B3F'
  },
  Otpcontainer: {
  },
  passwordBox:{
    flexDirection: 'row',
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: w(0.28),
    width: w(75),
    height: h(5),
    borderRadius: w(10),
    marginTop: h(7),
    paddingLeft: w(5),
  },
  touchPassword:{
    alignItems: 'center', 
    justifyContent: 'center'
  },
  EyeImage:{
    resizeMode: 'contain', 
    height: 20, 
    width: 20
  },
  inputFieldContainer: {
    alignSelf: 'center',
    fontSize: 16,
    borderColor:'#000',
    // borderColor: '#000',
    borderWidth: w(0.28),
    width: w(75),
    height: h(5),
    borderRadius: w(10),
    // top: h(21),
    paddingLeft: w(5)
  },
  inputFieldContainer2: {
    // alignSelf: 'center',
    // borderColor: '#000',
    // borderWidth: w(0.28),
    fontSize: 16,
    width: w(60),
    height: h(5),
    borderRadius: w(10),
  },
  passimage: {
    top: h(31),
    // marginRight:w(20)
    right: w(7)
  },
  rememberView:{
    flexDirection: 'row',
    marginTop: h(1),
    alignSelf: 'center',
  },
  showRemember:{
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
    top: h(0.2),
  },
  notShowRemember:{
    height: 12, 
    width: 12, 
    resizeMode: 'contain',
    tintColor:'#0000ff'
  },
  rememberTxt:{
    color: '#8c8c8c',
    marginLeft: w(2),
    fontSize: 12,
    marginTop: h(0.3),
  },
  forgotButton: {
    color: '#8c8c8c', 
    fontSize: 12,
    marginLeft: w(11),
    marginTop: h(0.3)
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#0000ff',
    width: w(75),
    height: h(5),
    borderRadius: w(10),
    top: h(7),
    justifyContent: 'center',
    alignItems: 'center'
  },
  AndText: {
    fontSize: 16,
    fontWeight: '500',
    // alignSelf: 'center',
    color: '#fff',
    // marginTop: h(1.2),
  },
  socialLogin:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  
  socialButton: {
    flexDirection: 'row',
    top: h(14),
    alignSelf: 'center',
    marginLeft: w(7),
  },
  socialImgButton: {
    // width: w(19),
    // alignSelf: 'center',
  },
  fbView:{
    height: h(6) ,
    width: h(6),
    borderRadius: h(6)/2,
    backgroundColor: '#000099',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gmailView:{
    height: h(6),
    width: h(6),
    borderRadius: h(6)/2,
    backgroundColor: '#ff5050',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: w(5),
  },
  innerTxt:{
    width: h(2.8),
    height: h(2.8),
    resizeMode: 'contain',
  },
  signUpView:{
    alignSelf: 'center',
    marginTop: h(8),
    color: '#0000ff',
  },
  img: {
    width: h(7),
    height: h(7.1),
    resizeMode: 'contain',
  },
  imgApple: {
    width: h(7),
    height: h(7.1),
    resizeMode: 'contain',
    borderRadius: w(10),
  },
  modelView: {
    backgroundColor: '#000',
    alignSelf: 'center',
    height: h(36),
    width: w(83),
    marginTop: h(20),
    borderRadius: w(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelTxT: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  modelbuttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#fa8072',
    width: w(60),
    height: h(6),
    borderRadius: w(10),
    marginTop: h(4),
    justifyContent: 'center',
  },
  modelAndText: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '400',
  },
  otpInput: {
    height: h(8),
    width: w(13),
    borderRadius: 10,
    backgroundColor: 'rgba(243, 242, 251, 255)',
    marginTop: h(2),
    textAlign: 'center',
    alignSelf: 'center'
},
  ButtonJoined: {
    alignSelf: 'center',
    top: h(20),
    marginLeft: w(3)
  },
  txtJoined: {
    color: '#fa8072',
  },
})