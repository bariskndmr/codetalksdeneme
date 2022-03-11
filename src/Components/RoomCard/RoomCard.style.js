import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width / 2,
    height: height / 4.5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#d7d8da',
    flex: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    color: '#ff9f3f',
  },
});
