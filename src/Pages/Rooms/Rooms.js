import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import FloatButton from 'src/Components/FloatButton';
import RoomCard from 'src/Components/RoomCard';
import RoomModal from 'src/Components/RoomModal';

import Styles from './Rooms.style';

const RoomList = [
  {text: 'React-Native'},
  {text: 'React'},
  {text: 'Python'},
  {text: 'Python'},
  {text: 'Python'},
];

const roomListRender = item => {
  return <RoomCard text={item.text} />;
};

const Rooms = () => {
  const [roomModalVisible, setRoomModalVisible] = useState(false);

  const handleModalToggle = () => {
    setRoomModalVisible(!roomModalVisible);
  };

  const handleSentRoomName = roomName => {
    handleModalToggle();
    sentRoomName(roomName);
  };

  const sentRoomName = () => {
    null;
  };

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={RoomList}
        renderItem={({item}) => roomListRender(item)}
        numColumns={2}
      />
      <FloatButton text="+" onPress={handleModalToggle} />
      <RoomModal
        visible={roomModalVisible}
        onClose={handleModalToggle}
        onSend={handleSentRoomName}
      />
    </SafeAreaView>
  );
};

export default Rooms;
