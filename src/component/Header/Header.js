import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import menuIcon from '../../assets/icon/icon-menu.png';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
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
        <View style={styles.tilteImgView}>
          <Image
            resizeMode="contain"
            style={styles.titlelogoStyle}
            // source={novusHeaderLogo}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
