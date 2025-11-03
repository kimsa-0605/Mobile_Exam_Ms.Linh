import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductCard from './ProductCard';

const Product = () => {
  const products = [
    { id: 1, image: require('../assest/book_images/item1.png'), name: 'Vintage Dress', price: 35 },
    { id: 2, image: require('../assest/book_images/item2.png'), name: 'Brown Leather Bag', price: 60 },
    { id: 3, image: require('../assest/book_images/item3.png'), name: 'Classic Watch', price: 45 },
    { id: 4, image: require('../assest/book_images/item4.png'), name: 'Retro Sunglasses', price: 25 },
    { id: 5, image: require('../assest/book_images/item1.png'), name: 'Vintage Dress', price: 35 },
    { id: 6, image: require('../assest/book_images/item2.png'), name: 'Brown Leather Bag', price: 60 },
    { id: 7, image: require('../assest/book_images/item3.png'), name: 'Classic Watch', price: 45 },
    { id: 8, image: require('../assest/book_images/item4.png'), name: 'Retro Sunglasses', price: 25 },
    { id: 9, image: require('../assest/book_images/item4.png'), name: 'Retro Sunglasses', price: 25 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>👜 Products at Cute Shop 🧸</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        initialNumToRender={6}
        windowSize={5}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#f4ede4',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#5a4633',
    marginBottom: 20,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  grid: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between', 
    marginBottom: 15,
  },
});
