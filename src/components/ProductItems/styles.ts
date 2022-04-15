import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
    flex: 2,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    width: '100%',
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 15,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    paddingLeft: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  star: {
    margin: 2,
  },
});
export default styles;
