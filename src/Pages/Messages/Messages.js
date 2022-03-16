import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Styles from './Messages.style';

const Messages = ({route}) => {
  const {roomName, key} = route.params;

  return (
    <SafeAreaView style={Styles.container}>
      <Text>{roomName} Odasına Hoş Geldin!</Text>
    </SafeAreaView>
  );
};

export default Messages;
