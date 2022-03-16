import React from 'react';
import {View, Text} from 'react-native';

import Styles from './MessageCard.style';

const MessageCard = ({userName, date, content}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <Text>{userName}</Text>
        <Text>{date}</Text>
      </View>
      <Text>{content}</Text>
    </View>
  );
};

export default MessageCard;
