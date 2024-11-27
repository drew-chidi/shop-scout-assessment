import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CategoryCard from '../components/CategoryCard';
// import useFetchCategories from '../hooks/useFertchCategories';

const TrendScreen: React.FC = () => {
  //   const {data: categories} = useFetchCategories();

  const categories: string[] = [];

  const renderCategory = ({item}: {item: string}) => (
    <CategoryCard
      title={item}
      imageUrl="https://via.placeholder.com/60"
      onPress={() => console.log(`Selected ${item}`)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        renderItem={renderCategory}
        keyExtractor={item => item}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default TrendScreen;
