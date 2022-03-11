import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Styles from './Button.style';

const Button = ({onPress, text, theme = 'primary'}) => {
  return (
    <TouchableOpacity style={Styles[theme].container} onPress={onPress}>
      <Text style={Styles[theme].text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
