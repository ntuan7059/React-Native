import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  price: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 13,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});
export default styles;
