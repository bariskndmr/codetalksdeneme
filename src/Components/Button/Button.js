import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import Styles from './Button.style';

const Button = ({isLoading, onPress, text, theme = 'primary'}) => {
  return (
    <TouchableOpacity style={Styles[theme].container} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={Styles[theme].text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
