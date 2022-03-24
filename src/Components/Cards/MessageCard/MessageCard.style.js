import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 10,
    minHeight: 60,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  italic: {fontStyle: 'italic'},
  contentContainer: {
    flex: 1,
    marginTop: 5,
  },
  content: {
    fontWeight: 'bold',
  },
});
