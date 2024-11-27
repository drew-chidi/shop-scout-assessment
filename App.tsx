import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
