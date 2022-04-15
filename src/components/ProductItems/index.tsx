import {View, Text, Image, StyleSheet, Button, FlatList} from 'react-native';
import React from 'react';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItems = (props: ProductItemProps) => {
  const {item} = props;
  const ar = [0, 0, 0, 0, 0];
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
          {ar.map((el, i) => (
            <FontAwsome
              key={i}
              style={styles.star}
              name={Math.floor(item.avgRating) > i ? 'star' : 'star-o'}
              size={18}
              color="#e47911"
            />
          ))}

          <Text>${item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          ${item.price}
          {item.oldPrice ? (
            <Text style={styles.oldPrice}> {item.oldPrice}</Text>
          ) : (
            <></>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItems;
