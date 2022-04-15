import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import ProductItems from '../../components/ProductItems';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import products from '../../data/products';
import Button from '../../components/Buttons/Button';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Button
        text={'Go to product'}
        title="Go to Details"
        onPress={() => navigation.navigate('Product')}>
        Go to product
      </Button>
      <FlatList
        data={products}
        renderItem={products => <ProductItems item={products.item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
export default HomeScreen;
