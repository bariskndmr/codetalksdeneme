import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import FloatButton from 'src/Components/FloatButton';
import RoomCard from 'src/Components/RoomCard';
import RoomModal from 'src/Components/RoomModal';

import Styles from './Rooms.style';

const Rooms = () => {
  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);

  React.useEffect(() => {
    database()
      .ref('Rooms/')
      .on('value', snapshot => {
        setRoomList(snapshot.val());
      });
  }, []);

  const roomListRender = item => {
    return <RoomCard text={item.roomName} />;
  };

  const handleModalToggle = () => {
    setRoomModalVisible(!roomModalVisible);
  };

  const handleSentRoomName = roomName => {
    handleModalToggle();
    sentRoomName(roomName);
  };

  const sentRoomName = roomName => {
    const userEmail = auth().currentUser.email;

    const contentObject = {
      roomName: roomName,
      userName: userEmail.split('@')[0],
    };

    database().ref('Rooms/').push(contentObject);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={roomList}
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
