import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import splashImg from '../../assets/image/Redux.png';

export const SplashScreen = ({navigation}) => {

  setTimeout(() => {
      navigation.navigate('Login')
  },2000)


return (
      <View style={styles.container}>  
          <Image
              source={splashImg}
              style={styles.logo}
              resizeMode="contain"
          />
           <Text style={styles.textHello}>btb Native</Text>
      </View>
)
}

export default SplashScreen;

