import React from 'react';
import {SafeAreaView, Text, View, FlatList, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import FloatButton from 'src/Components/FloatButton';
import MessageModal from 'src/Components/Modals/MessageModal';
import MessageCard from 'src/Components/Cards/MessageCard';

import Styles from './Messages.style';
import parseContentData from 'src/Utils/parseContentData';

const Messages = ({route}) => {
  const [inputModalVisible, SetInputModalVisible] = React.useState();
  const [contentList, setContentList] = React.useState([]);
  const {roomName, key} = route.params;

  React.useEffect(() => {
    database()
      .ref(`Rooms/${key}/Messages/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModalToggle = () => {
    SetInputModalVisible(!inputModalVisible);
  };

  const handleSendMessage = content => {
    handleModalToggle();
    sendMessage(content);
  };

  const sendMessage = content => {
    const userName = auth().currentUser.email;

    const contentObject = {
      text: content,
      name: userName.split('@')[0],
      date: new Date().toISOString(),
    };

    if (!content) {
      Alert.alert('Uyarı', 'İçerik Boş Olamaz');
    } else {
      database().ref(`Rooms/${key}/Messages/`).push(contentObject);
    }
  };

  const handleMessageCard = ({item}) => {
    return <MessageCard item={item} />;
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.textContainer}>
        <Text style={Styles.text}>{roomName} Odasına Hoş Geldin!</Text>
      </View>
      <FlatList data={contentList} renderItem={handleMessageCard} />
      <FloatButton text="+" onPress={handleModalToggle} />
      <MessageModal
        visible={inputModalVisible}
        onSend={handleSendMessage} // sendMessage'dan handleSendMessage olarak değiştirdim.
        onClose={handleModalToggle} // handleSendMessage fonksiyonunu verdiğim için malformed size hatası veriyor
      />
    </SafeAreaView>
  );
};

export default Messages;
