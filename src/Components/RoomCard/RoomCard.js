import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Styles from './RoomCard.style';

const RoomCard = ({text, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
