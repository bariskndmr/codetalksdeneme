import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import FloatButton from 'src/Components/FloatButton';
import RoomCard from 'src/Components/Cards/RoomCard';
import RoomModal from 'src/Components/Modals/RoomModal';

import Styles from './Rooms.style';

const Rooms = ({navigation}) => {
  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);

  React.useEffect(() => {
    database()
      .ref('Rooms/')
      .on('value', snapshot => {
        const rooms = [];
        snapshot.forEach(child => {
          rooms.push({
            key: child.key,
            roomName: child.val().roomName,
            userName: child.val().userName,
          });
        });
        setRoomList(rooms);
      });
  }, []);

  const roomListRender = item => {
    return (
      <RoomCard
        text={item.roomName}
        onPress={() => navigation.navigate('MessagesPage', item)}
      />
    );
  };

  const handleModalToggle = () => {
    setRoomModalVisible(!roomModalVisible);
  };

  const handleSendRoomName = roomName => {
    handleModalToggle();
    sentRoomName(roomName);
  };

  const sentRoomName = roomName => {
    const userEmail = auth().currentUser.email;

    const contentObject = {
      roomName: roomName.replace(/\s+/g, ''), // inputa değer girildiğinde boşlukları siler
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
        onSend={handleSendRoomName}
      />
    </SafeAreaView>
  );
};

export default Rooms;
