import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  description,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>#{price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    margin: 16,
    // alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginVertical: 16,
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
  },
  description: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'left',
    marginBottom: 10,
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FD903E',
    textAlign: 'left',
  },
});

export default ProductCard;
