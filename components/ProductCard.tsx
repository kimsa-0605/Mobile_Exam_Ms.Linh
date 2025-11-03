import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, ImageSourcePropType } from 'react-native';
import { Button } from 'react-native-paper';

type Product = {
  name: string;
  price: number;
  image: ImageSourcePropType;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View style={styles.productCard}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Button
            mode="contained"
            buttonColor="#b08b67"
            textColor="#fff"
            style={styles.buyButton}
            onPress={() => console.log(`Buying ${product.name}`)}
        >
            Buy Now
        </Button>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fffaf3',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d6c2a9',
    width: 160,
    alignItems: 'center',
    padding: 12,
    marginBottom: 15,
    shadowColor: '#b08b67',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4b3b2b',
    marginBottom: 4,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#8b6b4f',
    marginBottom: 10,
  },
  buyButton: {
    borderRadius: 20,
    width: '80%',
  },
});