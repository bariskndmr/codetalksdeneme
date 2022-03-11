import React from 'react';
import {TextInput, View} from 'react-native';

import Styles from './Input.style';

const Input = ({onChange, placeholder, isSecure, value}) => {
  return (
    <View style={Styles.container}>
      <TextInput
        value={value}
        style={Styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default Input;
