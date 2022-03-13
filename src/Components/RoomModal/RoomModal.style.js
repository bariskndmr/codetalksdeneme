import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: height / 6,
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  modal: {
    justifyContent: 'center',
  },
});
