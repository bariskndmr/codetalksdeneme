import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FloatButton from 'src/Components/FloatButton';
import MessageModal from 'src/Components/Modals/MessageModal';

import Styles from './Messages.style';

const Messages = ({route}) => {
  const [inputModalVisible, SetInputModalVisible] = React.useState();
  const {roomName} = route.params;

  const handleModalToggle = () => {
    SetInputModalVisible(!inputModalVisible);
  };

  const handleSendMessage = content => {
    handleModalToggle();
    sendMessage(content);
  };

  const sendMessage = content => {
    null;
  };

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
