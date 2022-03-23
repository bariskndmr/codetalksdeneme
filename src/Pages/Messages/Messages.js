import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import FloatButton from 'src/Components/FloatButton';
import MessageModal from 'src/Components/Modals/MessageModal';

import Styles from './Messages.style';

const Messages = ({route}) => {
  const [inputModalVisible, SetInputModalVisible] = React.useState();
  const {roomName, key} = route.params;

  const handleModalToggle = () => {
    SetInputModalVisible(!inputModalVisible);
  };

  const handleSendMessage = content => {
    handleModalToggle();
    sendMessage(content);
  };

  // Malfromed error
  const sendMessage = content => {
    const userName = auth().currentUser.email;

    const contentObject = {
      text: content,
      name: userName.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref(`Rooms/${key}/Messages`).push(contentObject);
  };
  // Malfromed error

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.textContainer}>
        <Text style={Styles.text}>{roomName} Odasına Hoş Geldin!</Text>
      </View>
      <FloatButton text="+" onPress={handleModalToggle} />
      <MessageModal
        visible={inputModalVisible}
        onSend={sendMessage}
        onClose={handleSendMessage}
      />
    </SafeAreaView>
  );
};

export default Messages;
