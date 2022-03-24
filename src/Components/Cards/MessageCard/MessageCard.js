import React from 'react';
import {View, Text} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

import Styles from './MessageCard.style';

const MessageCard = ({item}) => {
  const {name, date, text} = item;
  const formattedDate = formatDistance(parseISO(date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <Text style={[Styles.text, Styles.italic]}>{name}</Text>
        <Text style={[Styles.date, Styles.italic]}>{formattedDate}</Text>
      </View>
      <View style={Styles.contentContainer}>
        <Text style={Styles.content}>{text}</Text>
      </View>
    </View>
  );
};

export default MessageCard;
