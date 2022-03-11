import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import RoomCard from 'src/Components/RoomCard';

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
  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={RoomList}
        renderItem={({item}) => roomListRender(item)}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Rooms;
