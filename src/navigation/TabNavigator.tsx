import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrendScreen from '../screens/TrendScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const tabBarIcon = (route: any, color: string, size: number) => {
  let iconName: string;

  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Search') {
    iconName = 'search-outline';
  } else if (route.name === 'Trend') {
    iconName = 'trending-up-outline';
  } else if (route.name === 'Order') {
    iconName = 'reorder-three-outline';
  } else if (route.name === 'Profile') {
    iconName = 'person-outline';
  } else {
    iconName = 'alert-circle-outline'; // Default fallback icon
  }
  return <Ionicons name={iconName} size={size} color={color} />;
};
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => tabBarIcon(route, color, 25),
        tabBarLabelStyle: {
          fontSize: 9.82,
        },
        tabBarActiveTintColor: '#12AF37',
        tabBarInactiveTintColor: '#0000009E',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Trend" component={TrendScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
