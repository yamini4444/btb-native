import { StyleSheet } from 'react-native';
import { w, h } from '../../utils/Dimensions';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ececec',
  },

  logoStyle: {
    height: h(5),
    alignSelf: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: h(13),
    width: h(15),
    marginTop: h(5),
    resizeMode: 'stretch',
    borderRadius: h(25),
    marginLeft: h(2)
  },
  appName: {
    fontSize: 13,
    color: "blue",
    fontWeight: "bold",
    marginLeft: h(2),

  }

});
