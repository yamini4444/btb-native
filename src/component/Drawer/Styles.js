import { StyleSheet, Dimensions } from 'react-native';
import { w, h } from '../../utils/Dimensions';
import { TextSize } from '../../theme/TextSize';
import { TextColor, UiColor } from '../../theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  
  inputIcon: {
    width: w(5),
    height: h(5),
    tintColor: "#fff",
    marginTop: h(1.4),

  },
  drawerText: {
    marginLeft: w(5),
    marginTop: h(1.4),
    fontSize: 18,
    fontWeight: '500',
    color: "#fff",

  },
  drawerView: {
   
   flexDirection:"row",
   padding:h(1)

  },

});
