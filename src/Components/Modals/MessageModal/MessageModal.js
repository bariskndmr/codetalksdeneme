import React from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../../Button';

import Styles from './MessageModal.style';

const MessageModal = ({onSend, visible, onClose}) => {
  const [text, setText] = React.useState(null);

  React.useEffect(() => {
    setText(null);
  }, [onSend]);

  return (
    <Modal
      style={Styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={Styles.container}>
        <View style={Styles.inputContainer}>
          <TextInput placeholder="Sohbete katıl!" onChangeText={setText} />
        </View>
        <View style={Styles.buttonContainer}>
          <Button text="Gönder" onPress={() => onSend(text)} />
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;
