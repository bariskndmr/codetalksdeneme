import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: '#ff9f3f',
    },
    text: {
      ...baseStyle.text,
      color: '#fff',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: '#fff',
    },
    text: {
      ...baseStyle.text,
      color: '#ff9f3f',
    },
  }),
};
