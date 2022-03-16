import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../../Button';

import Styles from './RoomModal.style';

const RoomModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState();

  // bir sonraki tıklama da bir önceki içeriği tekrar gönderdiği için;
  useEffect(() => {
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
        <TextInput
          placeholder="Oda ismi giriniz"
          multiline
          onChangeText={setText}
          autoCorrect={false}
        />
        <Button text="Oluştur" onPress={() => onSend(text)} />
      </View>
    </Modal>
  );
};

export default RoomModal;
