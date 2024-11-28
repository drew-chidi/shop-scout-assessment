import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrderScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>OrderSCreen</Text>
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

export default OrderScreen;
