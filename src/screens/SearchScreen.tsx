import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import useFetchCategories from '../hooks/useFetchCategories';
import useFetchProducts from '../hooks/useFetchProducts';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const loadSearchHistory = async () => {
      const history = await AsyncStorage.getItem('searchHistory');
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    };
    loadSearchHistory();
  }, []);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    // Add search term to history and persist it
    const newHistory = [term, ...searchHistory.filter(item => item !== term)];
    setSearchHistory(newHistory);
    await AsyncStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const renderProduct = ({
    item,
  }: {
    item: {
      id: number;
      title: string;
      price: number;
      image: string;
      description: string;
    };
  }) => (
    <ProductCard
      title={item.title}
      price={item.price}
      imageUrl={item.image}
      description={item.description}
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

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const clearSearchHistory = async () => {
    await AsyncStorage.removeItem('searchHistory');
    setSearchHistory([]);
  };

  console.log({filteredCategories, filteredProducts, products});

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.searchBarContainer}>
          <Image
            source={require('../assets/svgs/search-icon.svg')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChangeText={handleSearch}
          />
        </View>
        <Image
          source={require('../assets/svgs/filter-icon.svg')}
          style={styles.filterIcon}
        />
      </View>
      <View style={styles.historySectionContainer}>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Search History</Text>
          <TouchableOpacity onPress={clearSearchHistory}>
            <Text style={styles.clearSearch}>Clear </Text>
          </TouchableOpacity>{' '}
        </View>
        <View style={styles.searchList}>
          {searchHistory.map((item, index) => (
            <Text key={index} style={styles.historyItem}>
              {item}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item}
          numColumns={2}
          initialNumToRender={4}
          columnWrapperStyle={styles.row}
          scrollEnabled={false}
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
    maxWidth: 600,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    gap: 8,
    width: '80%',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    fontSize: 16,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  historySectionContainer: {
    marginVertical: 40,
  },
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearSearch: {
    fontSize: 12,
    fontWeight: 'medium',
    color: '#FF882E',
  },
  searchList: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  historyItem: {
    fontSize: 10,
    fontWeight: 500,
  },
  row: {
    justifyContent: 'center',
  },
  categoryContainer: {
    marginBottom: 16,
    marginTop: 10,
  },
});

export default SearchScreen;
