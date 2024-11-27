import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your favorite products will appear here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 18,
    color: 'gray',
  },
});

export default FavoritesScreen;
