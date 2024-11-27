import React from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import useFetchCategories from '../hooks/useFetchCategories';
import useFetchProducts from '../hooks/useFetchProducts';

const categoryImages: {[key: string]: string} = {
  electronics: require('../assets/images/category-1.png'),
  jewelery: require('../assets/images/category-2.png'),
  "men's clothing": require('../assets/images/category-3.png'),
  "women's clothing": require('../assets/images/category-4.png'),
};

const categoryColors: {[key: string]: string} = {
  electronics: '#FFE5B4',
  jewelery: '#FFB6C1',
  "men's clothing": '#C3E8FF',
  "women's clothing": '#D5FFB3',
};

const SearchScreen: React.FC = () => {
  const {data: categories = [], isLoading: categoriesLoading} =
    useFetchCategories();
  const {data: products = [], isLoading: productsLoading} = useFetchProducts();

  const renderProduct = ({
    item,
  }: {
    item: {id: number; title: string; price: number; image: string};
  }) => (
    <ProductCard
      title={item.title}
      price={item.price}
      imageUrl={item.image}
      description={item.title}
    />
  );

  if (categoriesLoading || productsLoading) {
    return <Text>Loading...</Text>;
  }

  const renderCategory = ({item}: {item: string}) => (
    <CategoryCard
      title={item}
      image={categoryImages[item]}
      backgroundColor={categoryColors[item]}
      onPress={() => console.log(`Selected ${item}`)}
    />
  );

  return (
    <View style={styles.container}>
      <View>
        <View>
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>
      </View>
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item}
          numColumns={2}
          initialNumToRender={4} // 2 cards per row
          columnWrapperStyle={styles.row}
          scrollEnabled={false} // Disable scrolling for 4 items
        />
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
    alignSelf: 'center',
    maxWidth: 600,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    justifyContent: 'center',
    // marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default SearchScreen;
