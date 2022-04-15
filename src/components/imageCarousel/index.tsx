import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const ImageCarousel = ({images}: {string}) => {
  const windowWWidth = useWindowDimensions().width;
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWWidth - 20}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
      />
      <View style={styles.dots}>
        {images.map(({image, index}) => {
          <View style={styles.dot} />;
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {},
  image: {
    padding: 10,
    height: 258,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  dot: {
    width: 10,
    height: 100,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#c90303',
    borderColor: '#8b2f2f',
    margin: 5,
  },
});
export default ImageCarousel;
