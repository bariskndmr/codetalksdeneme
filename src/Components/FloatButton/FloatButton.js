import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Styles from './FloatButton.style';

const FloatButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FloatButton;
