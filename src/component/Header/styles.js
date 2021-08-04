import { StyleSheet } from 'react-native';
import { w, h } from '../../utils/Dimensions';
import { TextColor, UiColor } from '../../theme';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
  },
  headerView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: h(8),
  },
  menuIconView: {
    width: w(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tilteImgView: {
    width: w(62),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  menuIconStyle: {
    height: h(8),
    width: w(8),
    tintColor: UiColor.CORPORATEBLUE,
  },
  logoStyle: {
    height: h(3),
    width: w(40),
    tintColor: '#19587B',
  },
  titlelogoStyle: {
    height: h(5),
    width: w(40),
    marginRight: w(6),
  },
});
