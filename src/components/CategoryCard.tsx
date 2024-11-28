import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface CategoryCardProps {
  title: string;
  image: any;
  backgroundColor: string;
  onPress: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor}]}
      onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 15,
    borderRadius: 18,
    padding: 16,
    elevation: 3,
    width: '45%',
    // flex: 1,
  },
  image: {
    // width: 93.13,
    height: 93.13,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#181725',
    textTransform: 'capitalize',
  },
});

export default CategoryCard;
