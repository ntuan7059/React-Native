import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../QuantitySelector';
import Button from '../../components/Buttons/Button';
import ImageCarousel from '../../components/imageCarousel';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native-gesture-handler';

const ProductScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState();
  const [quantity, setQuantity] = useState(1);
  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>{product.title}</Text>
        <ImageCarousel images={product.images} />
        <Picker
          selectedValue={selectedOption}
          onValueChange={itemValue => setSelectedOption(itemValue)}
          mode="dropdown">
          {product.options.map((option, index) => (
            <Picker.Item label={option} value={option} key={index} />
          ))}
        </Picker>
        <Text style={styles.price}>
          ${product.price}
          {product.oldPrice ? (
            <Text style={styles.oldPrice}> {product.oldPrice}</Text>
          ) : (
            <></>
          )}
        </Text>
        <Text style={styles.description}>{product.description}</Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Button
          text={'Add To Cart'}
          onPress={() => {}}
          containerStyles={{backgroundColor: '#c9a54b'}}></Button>
        <Button text={'Buy nơw'} onPress={() => {}}></Button>
        <Button
          text={'Go back'}
          title="Go Back"
          onPress={() => navigation.navigate('Home')}>
          Go Back
        </Button>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
