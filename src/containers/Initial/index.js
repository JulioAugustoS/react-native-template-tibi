import React from 'react';
import {
  View,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Styles
import { colors, Global } from '../../global';
import styles from './styles';

const Initial = props => {
  return (
    <LinearGradient 
      colors={[colors.orange, colors.sunFlower]}
      style={Global.container}
    >
      <View style={Global.contentJustify}>
        <Text style={styles.title}>Template React Native</Text>
      </View>
    </LinearGradient>
  );
}

export default Initial;